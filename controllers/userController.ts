import Express from "express"
import mongoose from "mongoose"
import User from "../models/userModel"



// Create a new User and store in database
export const createUser = async(req: Express.Request, res:Express.Response, next:any)=>{

    const {username, profileImage, age, location, category, strike, ban, firstTime} = req.body
   
    const user = {
        username,
        profileImage,
        age,
        location,
        category,
        strike,
        ban,
        firstTime

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
    // const users = await User.find({}).sort({createdAt: -1})
    
    let page = Number(String(req.query.page)) - 1 || 0 ;
    const limit = Number(String((req.query.limit))) || 10;
    const search = req.query.search || "";

    // let username: string | string[] = String(req.query.users)! || "All";


    const users = await User.find({ username: { $regex: search, $options: "i"}}).sort({createdAt: -1})
                    .skip(page*limit)
                    .limit(limit);

    const result = await User.countDocuments({
        // category: {$in: [...category]},
        username: { $regex: search, $options: "i"}
    })
    
    const response = {
        error: false,
        result,
        limit,
        page: page + 1,
        users
    }




    // next(res.status(200).send('It worked!'));
    return next(
        res.status(200).json(response)
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