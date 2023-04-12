import Express from "express"
import mongoose from "mongoose"
import Ask from "../models/askModel"



// Create a new exercise and store in database
export const createAsk = async(req: Express.Request, res:Express.Response, next:any)=>{

    const {message, category, image} = req.body
   
    const ask = {
        message,
        category,
        image
    }

    const newAsk = await Ask.create(ask)

    
    return next(
        res.status(201).json({
            status: "OK",
            data: newAsk
        })
    )
}


// Get a new exercise
export const getAsk = async(req: Express.Request, res:Express.Response, next:any)=>{
    const { id }  = req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "Ask Doesn't exist! Wrong id"})
    }
   
    const ask = await Ask.findById(id)

    if(!ask){
        return res.status(404).json({message: "Ask Doesn't exist! Not Found!"})
    }

    return next(
        res.status(201).json({
            status: "OK",
            data: ask,
        })
    )
};


//Get all the exercise
export const getAllAsks =async (req: Express.Request, res:Express.Response, next:any)=>{
    const asks = await Ask.find({}).sort({createdAt: -1})
    
    // next(res.status(200).send('It worked!'));
    return next(
        res.status(200).json(asks)
    )
    
};



// Update an exercise
export const updateAsk = async(req: Express.Request, res:Express.Response, next:any)=> {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Ask doesn't exist"
            })
        )
    }
    

    const ask = await Ask.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!ask){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Ask doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: ask
        })
    )
};

// Delete an exercise
export const deleteAsk = async(req: Express.Request, res:Express.Response, next:any) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Ask doesn't exist"
            })
        )
    }

    const ask = await Ask.findOneAndDelete({_id: id})

    if(!ask){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Ask doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: ask
        })
    )
};

