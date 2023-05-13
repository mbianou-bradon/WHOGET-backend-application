import Express from "express"
import { createUser, deleteUser, getAllUsers, getUser, getUserThroughEmail, updateUser } from "../controllers/userController";



const router = Express.Router()

// Get all Userss

router.get('/', getAllUsers);

//Create a User
router.post('/', createUser);

//Get a Single User
router.get('/:id', getUser);

//Get a Single User
router.get('/email/:email', getUserThroughEmail);

//Delete a User
router.delete('/:id', deleteUser);

//Update a User
router.patch('/:id', updateUser);

export default router;