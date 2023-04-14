import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A category Must have a name"]
    }
})

const Category = mongoose.model("Category", categorySchema)

export default Category;