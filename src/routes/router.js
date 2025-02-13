import router from "./custom-router.js";

// routers
import "../routes/user/user-routes.js";

export const routes = (req, res) => {
	return router.handleRequest(req, res);
};
