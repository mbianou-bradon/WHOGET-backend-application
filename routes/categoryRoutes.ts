import Express from "express"
import { createCategory, getAllCategories, getCategory, deleteCategory, updateCategory} from "../controllers/categoryController"


const router = Express.Router()

// Get all Categories

router.get('/', getAllCategories);

//Create an Category
router.post('/', createCategory);

//Get a Single Category
router.get('/:id', getCategory);

//Delete an Category
router.delete('/:id', deleteCategory);

//Update an Category
router.patch('/:id', updateCategory);

export default router;