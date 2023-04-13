import Express from "express"


const router = Express.Router()

// Get all Userss

router.get('/', getAllUsers);

//Create a User
router.post('/', createUser);

//Get a Single User
router.get('/:id', getUser);

//Delete a User
router.delete('/:delete', deleteUser);

//Update a User
router.patch('/:id', updateUser);

export default router;