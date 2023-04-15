import express from "express";
import morgan from 'morgan';

import especiesRoutes from "./routes/especies.routes.js";

const app = express();

// Settings
app.use(morgan('dev'));

const PORT = 3000;
app.set("port", PORT);

app.use(express.json());

// Routes
app.use(especiesRoutes);


export default app;