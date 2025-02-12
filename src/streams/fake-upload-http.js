import { Readable } from "stream";

export class OneToHundredStream extends Readable {
	index = 1;

	_read() {
		const i = this.index++;

		setTimeout(() => {
			if (i > 100) {
				this.push(null);
				return;
			} else {
				const buf = Buffer.from(`${i}\n`);
				this.push(buf);
			}
		}, 500);
	}
}

fetch("http://localhost:3334/", {
	method: "POST",
	body: new OneToHundredStream(),
	duplex: "half",
});
