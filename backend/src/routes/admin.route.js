import { Router } from "express";
import { requestLogger } from "../middlewares/logging.middleware.js";

const router = Router();

router.use(requestLogger);

export default router;

