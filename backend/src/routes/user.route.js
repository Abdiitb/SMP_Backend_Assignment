import { Router } from "express";
import { 
    adminLogin,
    adminLogout,
    createNewAdminUser,
    createNewUser, 
    deleteUser, 
    getAllUsers, 
    getUserByID, 
    updateUserDetails 
} from "../controllers/user.controller.js";
import { requestLogger } from "../middlewares/logging.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(requestLogger);

router.route('/users').post(createNewUser);
router.route('/users').get(getAllUsers);
router.route('/users/:id').get(getUserByID);
router.route('/users/:id').put(updateUserDetails);
router.route('/users/:id').delete(deleteUser);
// router.route('/users/admin').post(createNewAdminUser);
// router.route('/users/admin/login').post(adminLogin);
// router.route('/users/admin/logout').post(verifyJWT, adminLogout);
// router.route('/users/admin/verify').post(verifyJWT, (req, res) => res.json({ valid: true, user: req.user }));

export default router;