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
        type: Array
    },
    duration: {
        type: Number,
        required: [true, "Please enter duration of the ask"]
    },
    visibility: {
        type: Boolean,
    },
    location:{
    	type: String,
    	// required: [true, "An Ask should have a Location"]
    },
    report : {
        type: Number,
        required : [true, "Number of times this ask was reported"]
    },
	userId : {
		type: String,	    	
	 },
	userName: {
	    type: String
	},
	userProfile: {
	   	type: String
	},
    userEmail: {
        type: String
    },
    userPhone: {
        type: String
    },
    userWhatsApp: {
        type: String
    },
},{timestamps: true})

const Ask = mongoose.model("Ask", askSchema)

export default Ask
