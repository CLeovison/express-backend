import Joi from "joi";

//Schema Definition

const queryValidation = Joi.object({
  limit: Joi.number().integer().min(1).default(10),
  page: Joi.number().integer().min(1).default(1),
  sort: Joi.string().default("fname"),
  sortOrder: Joi.string().valid("asc", "desc").default("asc"),
});

const userValidation = Joi.object({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  username: Joi.string().alphanum().min(5).max(30).required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9!@#$%&*]{3,30}$"))
    .alphanum()
    .required(),
  role: Joi.string().valid("User", "Admin"),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

// const productValidation = Joi.object({
//   available: Joi.number().min(1).required(),
//   price: Joi.number().required(),
//   productname: Joi.string().required(),
//   producttype: Joi.string().required(),
//   productdetails: Joi.string().required(),
//   variesBy: Joi.string().required(),
//   size: Joi.string().required(),
//   color: Joi.string().required(),
//   quantity: Joi.number().required(),
// });
//Middleware Validation
export const validationQuery = (req, res, next) => {
  const { error } = queryValidation.validate(req.query);

  if (error) {
    return res
      .status(400)
      .json({ message: "Invalid query parameter", details: error.details });
  }
  next();
};

export const registerValidation = (req, res, next) => {
  const { error } = userValidation.validate(req.body);

  if (error) {
    res.status(404).json({
      message: "Invalid output/please provide a correct output",
      details: error.details,
    });
  } else {
    next();
  }
};

export const productValidationQuery = (req, res, next) => {
  const { error } = productValidation.validate(req.body);

  if (error) {
    res.status(404).json({
      message: "Invalid output/please provide a correct information",
      details: error.details,
    });
  } else {
    next();
  }
};
