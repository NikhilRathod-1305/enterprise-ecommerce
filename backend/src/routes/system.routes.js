import express from 'express';
import { healthCheck, versionCheck , getTime } from '../controllers/system.controller.js';
import logger from '../middlewares/logger.middleware.js';
import requestTime from '../middlewares/requestTime.middleware.js';
const router = express.Router();

router.get('/health', logger , healthCheck);
router.get('/version', versionCheck);
router.get('/time', getTime);

export default router;