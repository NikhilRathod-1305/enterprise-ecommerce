import express from 'express';
import cors from 'cors';
import errorHandler from './utils/errorHandler.js';
import userRoutes from './routes/user.routes.js'

const app = express();

app.use(cors());
app.use(express.json());
// app.use(logger);
// app.use(requestTime);

app.use('/api', userRoutes);

app.use(errorHandler);

export default app;