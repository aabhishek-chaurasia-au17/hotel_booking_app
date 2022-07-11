import express from "express";
import { updateUser, deleteUser, getUser, getAllUser} from "../controllers/user.js"
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

//UPDATE
router.put('/:id', verifyUser, updateUser)

//DELETE

router.delete("/:id", verifyUser, deleteUser)

//GET

router.get("/:id", verifyUser, getUser)

//GET ALL

router.get("/", verifyUser, getAllUser)

export default router
