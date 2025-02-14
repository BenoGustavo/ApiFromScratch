import { sendResponse } from "../response/send-response.js";
import { randomUUID } from "crypto";

export class UserController {
	constructor() {
		this.getUsers = this.getUsers.bind(this);
		this.createUser = this.createUser.bind(this);
		this.updateUser = this.updateUser.bind(this);
		this.patchUser = this.patchUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	setDatabase(database) {
		this.database = database;
	}

	getUser(req, res) {
		const { id } = req.params;

		try {
			const user = this.database.readOne("users", id);

			sendResponse(
				res,
				200,
				"Bzz bzz fazendo busca de um usuário específico 🐝",
				user
			);
		} catch (error) {
			sendResponse(res, 404, "Bzz bzz usuário não encontrado 🐝");
		}

		return true;
	}

	getUsers(req, res) {
		try {
			const users = this.database.read("users");
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
			sendResponse(res, 500, "Bzz bzz tabela não existe 🐝", []);
			return true;
		}
	}

	createUser(req, res) {
		const { name, email } = req.body;
		const user = this.database.create("users", {
			id: randomUUID(),
			name,
			email,
		});
		sendResponse(res, 201, "Bzz bzz novo usuário criado 🐝", user);
		return true;
	}

	updateUser(req, res) {
		const { name, email } = req.body;

		const user = this.database.update("users", {
			id: req.params.id,
			name,
			email,
		});

		sendResponse(
			res,
			200,
			"Bzz bzz atualizando varias informações de um usuário 🐝",
			user
		);
		return true;
	}

	patchUser(req, res) {
		req.body.id = req.params.id;

		try {
			const user = this.database.partialUpdate("users", req.body);

			sendResponse(
				res,
				200,
				"Bzz bzz atualizando uma informação de um usuário 🐝",
				user
			);
		} catch (error) {
			sendResponse(res, 404, "Bzz bzz usuário não encontrado 🐝");
			return true;
		}
		return true;
	}

	deleteUser(req, res) {
		const { id } = req.params;

		try {
			this.database.deleteOne("users", id);
		} catch (error) {
			sendResponse(res, 404, "Bzz bzz usuário não encontrado 🐝");
			return true;
		}

		sendResponse(res, 204);
		return true;
	}
}
