import express from 'express';
import cors from 'cors';
import errorHandler from './utils/errorHandler.js';
import userRoutes from './routes/user.routes.js'
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
const app = express();

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: 'Too many requests, please try again later'
    }
})

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(logger);
// app.use(requestTime);
app.use(rateLimiter);
app.use('/api', userRoutes);

app.use(errorHandler);

export default app;