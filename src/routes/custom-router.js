class Router {
	constructor() {
		this.routes = [];
	}

	#buildRoutePath(path) {
		const routeParametersRegex = /:([a-zA-Z]+)/g;
		const pathWithParams = path.replaceAll(
			routeParametersRegex,
			"(?<$1>[a-z0-9-_]+)"
		);
		const pathRegex = new RegExp(`^${pathWithParams}$`);

		return pathRegex;
	}

	get(url, callback) {
		this.routes.push({
			method: "GET",
			url: this.#buildRoutePath(url),
			callback,
		});
	}

	post(url, callback) {
		this.routes.push({
			method: "POST",
			url: this.#buildRoutePath(url),
			callback,
		});
	}

	put(url, callback) {
		this.routes.push({
			method: "PUT",
			url: this.#buildRoutePath(url),
			callback,
		});
	}

	patch(url, callback) {
		this.routes.push({
			method: "PATCH",
			url: this.#buildRoutePath(url),
			callback,
		});
	}

	delete(url, callback) {
		this.routes.push({
			method: "DELETE",
			url: this.#buildRoutePath(url),
			callback,
		});
	}

	handleRequest(req, res) {
		const route = this.routes.find((route) => {
			return route.method === req.method && route.url.test(req.url);
		});

		if (route) {
			const params = req.url.match(route.url).groups;
			req.params = params;

			return route.callback(req, res);
		}

		return false;
	}
}

const router = new Router();

export default router;
