import http from "http";
import memoDatabase from "./database/memory.js";
import jsonDatabase from "./database/json.js";
import { json } from "./middlewares/json.js";
import { sendResponse } from "./response/send-response.js";
import { userRoutes } from "./routes/user-routes.js";
import path from "path";

const jsonDatabasePath = path.resolve("src", "database", "data", "data.json");
const database = new jsonDatabase(jsonDatabasePath.toString());
// const database = new memoDatabase();

const server = http.createServer(async (req, res) => {
	console.log(
		`🛜  Request method: ${req.method} | Request url: ${req.url} 🛜\n`
	);

	await json(req, res);

	const routeHandled = userRoutes(req, res, database);

	if (!routeHandled) {
		sendResponse(res, 404, "Não caiu em nenhum if 😢");
	}
});

server.listen(3333, () => console.log("🚀 Server is running on port 3333 🚀"));
