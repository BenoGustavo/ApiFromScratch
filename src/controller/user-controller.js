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
		sendResponse(
			res,
			200,
			"Bzz bzz fazendo busca de um usuário específico 🐝"
		);

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
			console.error(error);
			sendResponse(res, 500, "Bzz bzz erro ao listar usuários 🐝", []);
			return true;
		}
	}

	createUser(req, res) {
		const { name, email } = req.body;
		this.database.create("users", { id: randomUUID(), name, email });
		sendResponse(res, 201, "Bzz bzz novo usuário criado 🐝");
		return true;
	}

	updateUser(req, res) {
		sendResponse(
			res,
			200,
			"Bzz bzz atualizando varias informações de um usuário 🐝"
		);
		return true;
	}

	patchUser(req, res) {
		sendResponse(
			res,
			200,
			"Bzz bzz atualizando uma informação de um usuário 🐝"
		);
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

		sendResponse(res, 200, "Bzz bzz deletando um usuário 🐝");
		return true;
	}
}
