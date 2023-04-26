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
    age: {
        type: Number,
    },
    location: {
        town: {
            type: String
        },
        country: {
            type: String
        }
    },
    category: {
        type: [String],
        required: [true, "user must subscribe to atleast one category"]
    },
    strikes : {
        type : Number,
    },
    ban: {
        type: Boolean,
        required: [true, "It is neccessary to specify the ban status of a user"]
    },
    firstTime: {
        type: Boolean,
        required: [true, "It is necessary to specify if user is logging in for the first time"]
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User;