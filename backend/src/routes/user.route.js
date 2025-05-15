import { Router } from "express";
import { 
    createNewUser, 
    deleteUser, 
    getAllUsers, 
    getUserByID, 
    updateUserDetails 
} from "../controllers/user.controller.js";
import { requestLogger } from "../middlewares/logging.middleware.js";

const router = Router();

router.use(requestLogger);

router.route('/users').post(createNewUser);
router.route('/users').get(getAllUsers);
router.route('/users/:id').get(getUserByID);
router.route('/users/:id').put(updateUserDetails);
router.route('/users/:id').delete(deleteUser);

export default router;