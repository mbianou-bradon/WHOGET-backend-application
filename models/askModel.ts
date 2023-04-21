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
    },
    duration: {
        type: Number,
        required: [true, "Please enter duration of the ask"]
    },
    visibility: {
        type: Boolean,
        required: [true, "Give visibility of ask"]
    }
},{timestamps: true})

const Ask = mongoose.model("Ask", askSchema)

export default Ask