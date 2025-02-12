class InMemoryDatabase {
	constructor() {
		this.data = new Map();
	}

	create(key, value) {
		if (!this.data.has(key)) {
			this.data.set(key, []);
		}
		this.data.get(key).push(value);
	}

	read(key) {
		if (!this.data.has(key)) {
			throw new Error("Key not found");
		}
		return this.data.get(key);
	}

	update(key, value) {
		if (!this.data.has(key)) {
			throw new Error("Key not found");
		}
		this.data.set(key, value);
	}

	delete(key) {
		if (!this.data.has(key)) {
			throw new Error("Key not found");
		}
		this.data.delete(key);
	}

	getAll() {
		return Array.from(this.data.entries());
	}
}

export default InMemoryDatabase;
