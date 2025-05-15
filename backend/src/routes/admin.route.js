import { Router } from "express";
import { requestLogger } from "../middlewares/logging.middleware";

const router = Router();

router.use(requestLogger);

