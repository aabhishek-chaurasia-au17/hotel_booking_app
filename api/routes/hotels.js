import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel} from "../controllers/hotel.js"
import { verifyUser } from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post('/', verifyUser, createHotel)

//UPDATE
router.put('/:id', verifyUser, updateHotel)

//DELETE

router.delete("/:id", verifyUser, deleteHotel)

//GET

router.get("/:id", verifyUser, getHotel)

//GET ALL

router.get("/", verifyUser, getAllHotel)


export default router