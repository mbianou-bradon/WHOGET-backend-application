import Express from "express"
import mongoose from "mongoose"
import Category from "../models/categoryModel"



// Create a new Category and store in database
export const createCategory = async(req: Express.Request, res:Express.Response, next:any)=>{

    const {name} = req.body
   
    const category = {
        name
    }

    const newCategory = await Category.create(category)

    
    return next(
        res.status(201).json({
            status: "OK",
            data: newCategory
        })
    )
}


// Get a new Category
export const getCategory = async(req: Express.Request, res:Express.Response, next:any)=>{
    const { id }  = req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "Category Doesn't exist! Wrong id"})
    }
   
    const category = await Category.findById(id)

    if(!category){
        return res.status(404).json({message: "Category Doesn't exist! Not Found!"})
    }

    return next(
        res.status(201).json({
            status: "OK",
            data: category,
        })
    )
};


//Get all the User
export const getAllCategories =async (req: Express.Request, res:Express.Response, next:any)=>{
    const categories = await Category.find({}).sort({createdAt: -1})
    
   
    return next(
        res.status(200).json(categories)
    )
    
};



// Update an Category
export const updateCategory = async(req: Express.Request, res:Express.Response, next:any)=> {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Category doesn't exist"
            })
        )
    }
    

    const category = await Category.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!category){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Category doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: category
        })
    )
};

// Delete an Category
export const deleteCategory = async(req: Express.Request, res:Express.Response, next:any) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Category doesn't exist"
            })
        )
    }

    const category = await Category.findOneAndDelete({_id: id})

    if(!category){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Category doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: category
        })
    )
};