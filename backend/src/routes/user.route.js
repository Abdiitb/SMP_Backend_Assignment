import { Router } from "express";
import { createNewUser, deleteUser, getAllUsers, getUserByID, updateUserDetails } from "../controllers/user.controller";

const router = Router();

router.route('/users').post(createNewUser);
router.route('/users').get(getAllUsers);
router.route('/users/:id').get(getUserByID);
router.route('/users/:id').put(updateUserDetails);
router.route('/users/:id').delete(deleteUser);

export default router;