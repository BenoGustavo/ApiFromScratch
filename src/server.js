import http from "http";
import database from "./database/memory.js";

const myMemoDatabase = new database();

const server = http.createServer(async (req, res) => {
	console.log(
		`🛜  Request method: ${req.method} | Request url: ${req.url} 🛜\n`
	);

	const buffer = [];

	for await (const chunk of req) {
		buffer.push(chunk);
	}

	try {
		req.body = JSON.parse(Buffer.concat(buffer).toString());
	} catch {
		req.body = null;
	}

	const sendResponse = (statusCode, message, data = null) => {
		const response = { message };
		if (data !== null) response.data = data;
		res.setHeader("Content-Type", "application/json");
		res.writeHead(statusCode);
		res.end(JSON.stringify(response));
	};

	if (req.method === "GET" && req.url === "/users") {
		try {
			const users = myMemoDatabase.read("users");
			return sendResponse(
				200,
				"Bzz bzz fazendo listagem de usuários 🐝",
				users
			);
		} catch (error) {
			console.error(error);
			return sendResponse(
				500,
				"Bzz bzz fazendo listagem de usuários 🐝",
				[]
			);
		}
	}

	if (req.method === "POST" && req.url === "/users") {
		const { name, email } = req.body;
		myMemoDatabase.create("users", { name, email });
		return sendResponse(201, "Bzz bzz novo usuário criado 🐝");
	}

	if (req.method === "PUT" && req.url === "/users") {
		return sendResponse(
			200,
			"Bzz bzz atualizando varias informações de um usuário 🐝"
		);
	}

	if (req.method === "PATCH" && req.url === "/users") {
		return sendResponse(
			200,
			"Bzz bzz atualizando uma informação de um usuário 🐝"
		);
	}

	if (req.method === "DELETE" && req.url === "/users") {
		return sendResponse(200, "Bzz bzz deletando um usuário 🐝");
	}

	return sendResponse(404, "Não caiu em nenhum if 😢");
});

server.listen(3333, () => console.log("🚀 Server is running on port 3333 🚀"));
