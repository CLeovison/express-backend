import Register from "../model/User/Register.mjs";

export const RegisterController = {
  createRegister: async (req, res) => {
    //First i must declare a variable in order to store the new data that has been
    //Created, Secondly the new Register called because inorder to create a new Data
    //You need the "New" keyword and then requesting all the Schema in the "Register"
    //The "Req.Body" specify that i am requesting the whole body in the Register
    const savedRegister = new Register(req.body);

    try{
      //First declare a new variable to call the "savedRegister",
      //"The Await" keyword has been use and call the "savedRegister" so when a new
      //data has been created it will be saved to the database
      const newRegister = await savedRegister.save()

      //If the saving is success then, it will send back, status(201) and the body
      if(newRegister) res.status(201).send(savedRegister)

    }catch(error){
      res.status(404).send(error)
    }
  },

  getPaginatedRegister: async (req, res) => {},
  getNewRegisterID: async (req, res) => {},
  updateRegister: async (req, res) => {},
  deleteRegister: async (req, res) => {},
};
