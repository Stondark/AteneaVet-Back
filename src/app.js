import express from "express";
import morgan from 'morgan';
import { PORT } from '../config.js';

import especiesRoutes from "./routes/especies.routes.js";
import clasificacionRoutes from "./routes/clasificacionanimales.routes.js";


const app = express();

// Settings
app.use(morgan('dev'));

app.set("port", PORT);

app.use(express.json());

// Headers
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// Routes
app.use(clasificacionRoutes);
app.use(especiesRoutes);


export default app;