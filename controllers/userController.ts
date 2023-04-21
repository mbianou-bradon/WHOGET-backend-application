import Express from "express"
import mongoose from "mongoose"
import User from "../models/userModel"



// Create a new User and store in database
export const createUser = async(req: Express.Request, res:Express.Response, next:any)=>{

    const {username, profileImage, category, ban} = req.body
   
    const user = {
        username,
        profileImage,
        category,
        ban

    }

    const newUser = await User.create(user)

    
    return next(
        res.status(201).json({
            status: "OK",
            data: newUser
        })
    )
}


// Get a new User
export const getUser = async(req: Express.Request, res:Express.Response, next:any)=>{
    const { id }  = req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "User Doesn't exist! Wrong id"})
    }
   
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({message: "User Doesn't exist! Not Found!"})
    }

    return next(
        res.status(201).json({
            status: "OK",
            data: user,
        })
    )
};


//Get all the User
export const getAllUsers =async (req: Express.Request, res:Express.Response, next:any)=>{
    const users = await User.find({}).sort({createdAt: -1})
    
    // next(res.status(200).send('It worked!'));
    return next(
        res.status(200).json(users)
    )
    
};



// Update an User
export const updateUser = async(req: Express.Request, res:Express.Response, next:any)=> {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "User doesn't exist"
            })
        )
    }
    

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "User doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: user
        })
    )
};

// Delete an User
export const deleteUser = async(req: Express.Request, res:Express.Response, next:any) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "User doesn't exist"
            })
        )
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "User doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: user
        })
    )
};