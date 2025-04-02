const api = {
	get: async <D>(url: string, options?: RequestInit) => {
		const response = await fetch(url, {
			method: 'GET',
			...options,
		});
		return response.json() as D;
	},
	post: async <D, B>(url: string, data: B, options?: RequestInit) => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
			...options,
		});
		return response.json() as D;
	},
	patch: async <D, B>(url: string, data: B, options?: RequestInit) => {
		const response = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				...options?.headers,
			},
			body: JSON.stringify(data),
			...options,
		});
		return response.json() as D;
	},
	delete: async <D>(url: string, options?: RequestInit) => {
		const response = await fetch(url, {
			method: 'DELETE',
			...options,
		});
		return response.json() as D;
	},
};
