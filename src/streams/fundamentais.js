// Faz stream de dados de entrada (terminal) para saída
// process.stdin.pipe(process.stdout);
import { Readable, Transform, Writable } from "stream";

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

export class InverseNumberStream extends Transform {
	_transform(chunk, encoding, callback) {
		const transformed = Number(chunk.toString()) * -1;

		console.log(transformed);

		callback(null, Buffer.from(String(transformed)));
	}
}

export class MultiplyByTwoStream extends Writable {
	_write(chunk, encoding, callback) {
		const number = parseInt(chunk.toString(), 10);
		console.log(number * 2);
		callback();
	}
}

new OneToHundredStream()
	.pipe(new InverseNumberStream())
	.pipe(new MultiplyByTwoStream());
