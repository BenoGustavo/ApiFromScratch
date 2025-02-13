import fs from "fs";

class JsonDatabase {
	#data = this.#loadData();

	constructor() {}

	setFilePath(filePath) {
		this.filePath = filePath;
	}

	#loadData() {
		if (!fs.existsSync(this.filePath)) {
			return {};
		}
		const fileContent = fs.readFileSync(this.filePath, "utf-8");
		return JSON.parse(fileContent);
	}

	#saveData() {
		fs.writeFileSync(this.filePath, JSON.stringify(this.#data, null, 2));
	}

	create(key, value) {
		if (!this.#data[key]) {
			this.#data[key] = [];
		}
		this.#data[key].push(value);
		this.#saveData();
	}

	read(key) {
		if (!this.#data[key]) {
			throw new Error("Key not found");
		}
		return this.#data[key];
	}

	update(key, value) {
		if (!this.#data[key]) {
			throw new Error("Key not found");
		}
		this.#data[key] = value;
		this.#saveData();
	}

	delete(key) {
		if (!this.#data[key]) {
			throw new Error("Key not found");
		}
		delete this.#data[key];
		this.#saveData();
	}

	getAll() {
		return this.#data;
	}
}

const database = new JsonDatabase();

export default database;
