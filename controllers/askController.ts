import Express from "express";
import mongoose from "mongoose";
import Ask from "../models/askModel";
import Category from "../models/categoryModel";

// Create a new exercise and store in database
export const createAsk = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const {
    message,
    category,
    image,
    location,
    duration,
    visibility,
    report,
    userId,
    userName,
    userProfile,
    userEmail,
    userPhone,
    userWhatsApp,
  } = req.body;

  const ask = {
    message,
    category,
    image,
    location,
    duration,
    visibility,
    report,
    userId,
    userName,
    userProfile,
    userEmail,
    userPhone,
    userWhatsApp,
  };
  try {
    const newAsk = await Ask.create(ask);
    return next(
      res.status(201).json({
        status: "OK",
        data: newAsk,
      })
    );
  } catch (error) {
    return next(res.status(404).json({ error }));
  }
};

// Get a new exercise
export const getAsk = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Ask Doesn't exist! Wrong id" });
  }

  const ask = await Ask.findById(id);

  if (!ask) {
    return res.status(404).json({ message: "Ask Doesn't exist! Not Found!" });
  }

  return next(
    res.status(201).json({
      status: "OK",
      data: ask,
    })
  );
};

//Get all the exercise
export const getAllAsks = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const defaultLimit = 10;
  let page = Number(String(req.query.page)) - 1 || 0;
  const limit = Number(String(req.query.limit)) || defaultLimit;
  const search = req.query.search || "";

  let category: string | string[] = String(req.query.category)! || "All";

  const categories = await Category.find({})
    .sort({ createdAt: -1 })
    .select("name");

  const allCategories = categories.map((category) => category.name);

  category === "All"
    ? (category = [...allCategories])
    : (category = category.split(","));

  const asks = await Ask.find({ message: { $regex: search, $options: "i" } })
    .sort({ createdAt: -1 })
    .where("category")
    .in([...category])
    .skip(page * limit)
    .limit(limit);

  const result = await Ask.countDocuments({
    category: { $in: [...category] },
    // name: { $regex: search, $options: "i"}
  });

  const response = {
    error: false,
    result,
    limit,
    page: page + 1,
    category: categories,
    asks,
  };
  // next(res.status(200).send('It worked!'));
  return next(res.status(200).json(response));
};

// Update an exercise
export const updateAsk = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Ask doesn't exist",
      })
    );
  }

  const ask = await Ask.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!ask) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Ask doesn't exist",
      })
    );
  }

  return next(
    res.status(200).json({
      status: "OK",
      data: ask,
    })
  );
};

// Delete an exercise
export const deleteAsk = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Ask doesn't exist",
      })
    );
  }

  const ask = await Ask.findOneAndDelete({ _id: id });

  if (!ask) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Ask doesn't exist",
      })
    );
  }

  return next(
    res.status(200).json({
      status: "OK",
      data: ask,
    })
  );
};
