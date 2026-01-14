import express from 'express';
import cors from 'cors';
import systemRoutes from './routes/system.routes.js';
import logger from './middlewares/logger.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api', systemRoutes);

export default app;