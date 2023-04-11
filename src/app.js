import express from "express";
import especiesRoutes from "./routes/especies.routes.js";

const app = express();

// Settings

const PORT = 3000;

app.set("port", PORT);

// Routes
app.use(especiesRoutes);


export default app;