import { baseUrl } from "../config/api";

export type Headers = { [key: string]: string };
export type Options<B = unknown> = {
  baseURL?: string;
  headers?: Headers;
  params?: Params;
  data?: B;
  signal?: AbortSignal;
};
export type Params = URLSearchParams;
export type PaginationOptions = {
  page?: number;
  size?: number;
};

export type Response<T = unknown> = {
  data: T;
  code: number;
  message: string;
};

export class AuthError extends Error {
  status;
  constructor({ status, message }: { status: number; message: string }) {
    super(message);
    this.status = status;
  }
}

export class ValidationError {
  validation;
  status;
  message;
  constructor({
    code,
    message,
    validation,
  }: {
    code: number;
    message: string;
    validation: { field: string; message: string }[];
  }) {
    this.validation = validation;
    this.status = code;
    this.message = message;
  }
}

type InfiniteScroll = {
  pageNo: number;
  size: number;
  numberOfElements: number;
  isFirst: boolean;
  isLast: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
};
type Pagination = {
  page: number;
  isFirst: boolean;
  isLast: boolean;
  isEmpty: boolean;
  totalPages: number;
  totalElements: number;
};

export type InfiniteScrollData<T> = {
  list: T[];
  pagination: InfiniteScroll;
};

export type PaginationData<T> = {
  list: T[];
  pagination: Pagination;
};

export type ApiClient = {
  GET: <T = unknown>(
    url: string,
    config?: Omit<Options, "data">
  ) => Promise<Response<T>>;
  POST: <T = unknown, B = unknown>(
    url: string,
    config?: Options<B>
  ) => Promise<Response<T>>;
  PATCH: <T = unknown, B = unknown>(
    url: string,
    config?: Options<B>
  ) => Promise<Response<T>>;
  DELETE: <T = unknown>(
    url: string,
    config?: Omit<Options, "data">
  ) => Promise<Response<T>>;
};

const paramToString = (params?: URLSearchParams) =>
  params ? `?${params}` : "";

export const baseHeader: Headers = {
  "Content-Type": "application/json",
};

export const createApi = (): ApiClient => {
  return {
    GET: async (url, config) => {
      const fetchUrl = `${config?.baseURL ?? baseUrl}${url}${paramToString(config?.params)}`;
      const fetchHeader = { ...baseHeader, ...config?.headers };

      const result = await fetch(fetchUrl, {
        ...config,
        method: "GET",
        credentials: "include",
        headers: fetchHeader,
      });

      const responseBody = await result.json().catch(() => null);

      if (result.ok) {
        return responseBody;
      }

      if (result.status === 401) {
        throw new AuthError({ status: result.status, message: "Unauthorized" });
      }

      throw responseBody;
    },
    POST: async (url, config) => {
      const fetchUrl = `${config?.baseURL ?? baseUrl}${url}${paramToString(config?.params)}`;
      const fetchHeader = new Headers({
        ...baseHeader,
        "Content-Type": "application/json;charset=UTF-8",
        ...config?.headers,
      });
      const result = await fetch(fetchUrl, {
        ...config,
        method: "POST",
        credentials: "include",
        headers: fetchHeader,
        body: JSON.stringify(config?.data),
      });

      const responseBody = await result.json().catch(() => null);

      if (result.ok) {
        return responseBody;
      }

      if (result.status === 400) {
        throw new ValidationError(responseBody);
      }

      throw responseBody;
    },
    PATCH: async (url, config) => {
      const fetchUrl = `${config?.baseURL ?? baseUrl}${url}${paramToString(config?.params)}`;
      const fetchHeader = new Headers({
        ...baseHeader,
        "Content-Type": "application/json;charset=UTF-8",
        ...config?.headers,
      });
      const result = await fetch(fetchUrl, {
        ...config,
        method: "PATCH",
        credentials: "include",
        headers: fetchHeader,
        body: JSON.stringify(config?.data),
      });

      const responseBody = await result.json().catch(() => null);

      if (result.ok) {
        return responseBody;
      }

      throw responseBody;
    },
    DELETE: async (url, config) => {
      const fetchUrl = `${config?.baseURL ?? baseUrl}${url}${paramToString(config?.params)}`;
      const fetchHeader = new Headers({ ...baseHeader, ...config?.headers });

      const result = await fetch(fetchUrl, {
        ...config,
        method: "DELETE",
        credentials: "include",
        headers: fetchHeader,
      });

      const responseBody = await result.json().catch(() => null);

      if (result.ok) {
        return responseBody;
      }

      throw responseBody;
    },
  };
};
