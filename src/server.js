const dotenv = require("dotenv");
const connectDB = require("./config/db");

// handling uncaught exception
process.on("uncaughtException", (err) => {
	console.log("UNCAUGHT EXCEPTION! Shutting down...");
	console.log(err.name, err.message);
	console.log(err);
	process.exit(1);
});

// setting enviorment variables
dotenv.config({ path: "./config.env" });
const app = require("./app");

// database connection
connectDB();

// setting up server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log(`Listening to Server on port ${port} *_*`);
});

// handling unhandled rejection
process.on("unhandledRejection", (err) => {
	console.log("UNHANDLED REJECTION! Shutting down...");
	console.log(err);
	server.close(() => {
		process.exit(1);
	});
});

// handling sigterm
process.on("SIGTERM", () => {
	console.log("SIGTERM RECEIVED. Shutting down gracefully");
	server.close(() => {
		console.log("Process terminated!");
	});
});