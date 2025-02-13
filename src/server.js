import http from "http";
import jsonDatabase from "./database/json.js";
import { json } from "./middlewares/json.js";
import { sendResponse } from "./response/send-response.js";
import { routes } from "./routes/router.js";
import path from "path";

const jsonDatabasePath = path.resolve("src", "database", "data", "data.json");
jsonDatabase.setFilePath(jsonDatabasePath);

const server = http.createServer(async (req, res) => {
	console.log(
		`🛜  Request method: ${req.method} | Request url: ${req.url} 🛜\n`
	);

	await json(req, res);

	const routeHandled = routes(req, res);

	if (!routeHandled) {
		sendResponse(res, 404, "Não caiu em nenhum if 😢");
	}
});

server.listen(3333, () => console.log("🚀 Server is running on port 3333 🚀"));
