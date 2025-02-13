class Router {
	constructor() {
		this.routes = [];
	}

	get(url, callback) {
		this.routes.push({ method: "GET", url, callback });
	}

	post(url, callback) {
		this.routes.push({ method: "POST", url, callback });
	}

	put(url, callback) {
		this.routes.push({ method: "PUT", url, callback });
	}

	patch(url, callback) {
		this.routes.push({ method: "PATCH", url, callback });
	}

	delete(url, callback) {
		this.routes.push({ method: "DELETE", url, callback });
	}

	handleRequest(req, res) {
		const route = this.routes.find(
			(route) => route.method === req.method && route.url === req.url
		);

		if (route) {
			return route.callback(req, res);
		}

		return false;
	}
}

const router = new Router();

export default router;
