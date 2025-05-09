/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as mainIndexImport } from './routes/(main)/index'
import { Route as mainSignupImport } from './routes/(main)/signup'
import { Route as mainLoginImport } from './routes/(main)/login'
import { Route as mainPostEditIndexImport } from './routes/(main)/post/edit/index'

// Create/Update Routes

const mainIndexRoute = mainIndexImport.update({
  id: '/(main)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const mainSignupRoute = mainSignupImport.update({
  id: '/(main)/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const mainLoginRoute = mainLoginImport.update({
  id: '/(main)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const mainPostEditIndexRoute = mainPostEditIndexImport.update({
  id: '/(main)/post/edit/',
  path: '/post/edit/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(main)/login': {
      id: '/(main)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof mainLoginImport
      parentRoute: typeof rootRoute
    }
    '/(main)/signup': {
      id: '/(main)/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof mainSignupImport
      parentRoute: typeof rootRoute
    }
    '/(main)/': {
      id: '/(main)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof mainIndexImport
      parentRoute: typeof rootRoute
    }
    '/(main)/post/edit/': {
      id: '/(main)/post/edit/'
      path: '/post/edit'
      fullPath: '/post/edit'
      preLoaderRoute: typeof mainPostEditIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/login': typeof mainLoginRoute
  '/signup': typeof mainSignupRoute
  '/': typeof mainIndexRoute
  '/post/edit': typeof mainPostEditIndexRoute
}

export interface FileRoutesByTo {
  '/login': typeof mainLoginRoute
  '/signup': typeof mainSignupRoute
  '/': typeof mainIndexRoute
  '/post/edit': typeof mainPostEditIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(main)/login': typeof mainLoginRoute
  '/(main)/signup': typeof mainSignupRoute
  '/(main)/': typeof mainIndexRoute
  '/(main)/post/edit/': typeof mainPostEditIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/login' | '/signup' | '/' | '/post/edit'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/signup' | '/' | '/post/edit'
  id:
    | '__root__'
    | '/(main)/login'
    | '/(main)/signup'
    | '/(main)/'
    | '/(main)/post/edit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  mainLoginRoute: typeof mainLoginRoute
  mainSignupRoute: typeof mainSignupRoute
  mainIndexRoute: typeof mainIndexRoute
  mainPostEditIndexRoute: typeof mainPostEditIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  mainLoginRoute: mainLoginRoute,
  mainSignupRoute: mainSignupRoute,
  mainIndexRoute: mainIndexRoute,
  mainPostEditIndexRoute: mainPostEditIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(main)/login",
        "/(main)/signup",
        "/(main)/",
        "/(main)/post/edit/"
      ]
    },
    "/(main)/login": {
      "filePath": "(main)/login.tsx"
    },
    "/(main)/signup": {
      "filePath": "(main)/signup.tsx"
    },
    "/(main)/": {
      "filePath": "(main)/index.tsx"
    },
    "/(main)/post/edit/": {
      "filePath": "(main)/post/edit/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
