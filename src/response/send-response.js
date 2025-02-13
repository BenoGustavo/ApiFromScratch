export const sendResponse = (res, statusCode, message, data = null) => {
	const response = { message };
	if (data !== null) response.data = data;
	res.setHeader("Content-Type", "application/json");
	res.writeHead(statusCode);
	res.end(JSON.stringify(response));
};
