import mongoose from "mongoose";

const askSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, "An ASK can't be empty"]
    },
    category:{
        type: String,
        required: [true, "An ASK must belong to atleast one Category"]
    },
    image: {
        type: String
    }
}, {timestamp: true})


const Ask = new mongoose.Model("Ask", askSchema)

export default Ask