import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    oAuthToken: {
        type: String,
        required: [true, "Auth token required!"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    profileImage: {
        type: String,
    },
    age: {
        type: Number,
    },
    town: {
        type: String
    },
    country: {
        type: String

    },
    category: {
        type: [String],
        required: [true, "user must subscribe to atleast one category"]
    },
    phoneNumber: {
        type: Number,
    },
    email: {
        type: String,
        required : [true, "Please Add an Email address"]
    },
    userWhatsapp : {
        type: String
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