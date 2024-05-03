import Joi from "joi";

//Schema Definition
const queryValidation = Joi.object({
  limit: Joi.number().integer().min(1).default(10),
  page: Joi.number().integer().min(1).default(1),
  sort: Joi.string().default("fname"),
  sortOrder: Joi.string().valid("asc", "desc").default("asc"),
});

const userValidation =  Joi.object({
  fname: Joi.string()
})


//Middleware Validation
export const validationQuery = (req, res, next) => {
  const { error } = queryValidation.validate(req.query);

  if(error){
    return res.status(400).json({message: "Invalid query parameter", details: error.details })
  }
  next();
};
