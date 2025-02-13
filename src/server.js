import http from "http";
import database from "./database/memory.js";
import { json } from "./middlewares/json.js";
import { sendResponse } from "./response/send-response.js";
import { userRoutes } from "./routes/user-routes.js";

const myMemoDatabase = new database();

const server = http.createServer(async (req, res) => {
	console.log(
		`🛜  Request method: ${req.method} | Request url: ${req.url} 🛜\n`
	);

	await json(req, res);

	const routeHandled = userRoutes(req, res, myMemoDatabase);

	if (!routeHandled) {
		sendResponse(res, 404, "Não caiu em nenhum if 😢");
	}
});

server.listen(3333, () => console.log("🚀 Server is running on port 3333 🚀"));
