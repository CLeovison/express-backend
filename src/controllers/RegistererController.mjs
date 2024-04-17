import Register from "../model/User/Register.mjs";

export const RegisterController = {
  createRegister: async (req, res) => {
    //The reason why the "New" keyword was use is because whenever the their are new input then
    //It will automatically create a new body for the Register
    const newRegister = new Register(req.body);

    try {
    } catch (err) {
      console.log(err);
    }
  },

  getPaginatedRegister: async (req, res) => {},
  updateRegister: async (req, res) => {},
  deleteRegister: async (req, res) => {},
};
