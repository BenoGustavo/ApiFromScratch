import { sendResponse } from "../response/send-response.js";

export const userRoutes = (req, res, myMemoDatabase) => {
	if (req.method === "GET" && req.url === "/users") {
		try {
			const users = myMemoDatabase.read("users");
			if (!users) {
				throw new Error("Key not found");
			}

			sendResponse(
				res,
				200,
				"Bzz bzz fazendo listagem de usuários 🐝",
				users
			);
			return true;
		} catch (error) {
			console.error(error);
			sendResponse(res, 500, "Bzz bzz erro ao listar usuários 🐝", []);
			return true;
		}
	}

	if (req.method === "POST" && req.url === "/users") {
		const { name, email } = req.body;
		myMemoDatabase.create("users", { name, email });
		sendResponse(res, 201, "Bzz bzz novo usuário criado 🐝");
		return true;
	}

	if (req.method === "PUT" && req.url === "/users") {
		sendResponse(
			res,
			200,
			"Bzz bzz atualizando varias informações de um usuário 🐝"
		);
		return true;
	}

	if (req.method === "PATCH" && req.url === "/users") {
		sendResponse(
			res,
			200,
			"Bzz bzz atualizando uma informação de um usuário 🐝"
		);
		return true;
	}

	if (req.method === "DELETE" && req.url === "/users") {
		sendResponse(res, 200, "Bzz bzz deletando um usuário 🐝");
		return true;
	}

	return false;
};
