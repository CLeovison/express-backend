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
  username: Joi.string().alphanum().min(8).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirm: Joi.ref("password"),
  email: Joi.string()
    .email({ minDomainSegments: 3, tlds: { allow: ["com", "net"] } })
    .required()
});

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
    res
      .status(404)
      .json({ message: "Fill Up All The Forms", details: error.details });
  }
};
