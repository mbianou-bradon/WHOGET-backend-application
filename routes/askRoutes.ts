import Express from "express"
import { createAsk, getAllAsks, getAsk, deleteAsk, updateAsk, getAllFilteredAsks} from "../controllers/askController"


const router = Express.Router()

// Get all ASKs
router.get('/', getAllAsks);

// Get all Filtered ASKs
router.get('/filter', getAllFilteredAsks);

//Create an ASK
router.post('/', createAsk);

//Get a Single Ask
router.get('/:id', getAsk);

//Delete an ASK
router.delete('/:id', deleteAsk);

//Update an ASK
router.patch('/:id', updateAsk);

export default router;