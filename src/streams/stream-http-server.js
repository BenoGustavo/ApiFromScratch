import http from "http";
import { Transform } from "stream";

class InverseNumberStream extends Transform {
	_transform(chunk, encoding, callback) {
		const transformed = Number(chunk.toString()) * -1;

		console.log(transformed);

		callback(null, Buffer.from(String(transformed)));
	}
}

const server = http.createServer((req, res) => {
	return req.pipe(new InverseNumberStream()).pipe(res);
});

server.listen(3334, (req, res) => {
	console.log("Stream Server is running on port 3334");
});
