import Register from "../model/User/Register.mjs";

export const RegisterController = {
  createRegister: async (req, res) => {
    //The reason why the "New" keyword was use is because whenever the their are new input then
    //It will automatically create a new body for the Register
    const newRegister = new Register(req.body);
    //Then the user input will be save in the database
    try {
    const savedRegister = await newRegister.save();
    
    //If the Register is sucessful, send back the 201 status code and post body
    if(savedRegister) res.status(201).send(newRegister)
    } catch (err) {
      console.log(err);
    }
  },

  getPaginatedRegister: async (req, res) => {},
  updateRegister: async (req, res) => {},
  deleteRegister: async (req, res) => {},
};
