import dotenv from "dotenv";
dotenv.config();

import app from "./src/app"

// const {PORT} = process.env;
const PORT = 3000;

const server = app.listen(PORT, () => {
	console.log(`Server start with port ${PORT}`);
})

process.on('SIGINT', () => {
	server.close(() => console.log(`exits server express`))
})
