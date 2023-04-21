import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    profileImage: {
        type: String,
        required: [true, "profileImage is required"]
    },
    category: {
        type: [String],
        required: [true, "user must subscribe to atleast one category"]
    },
    ban: {
        type: Boolean,
        required: [true, "It is neccessary to specify the ban status of a user"]
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User;