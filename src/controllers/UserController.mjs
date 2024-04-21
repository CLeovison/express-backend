import User from "../model/User/User.mjs";

export const UserController = {
  createUser: async (req, res) => {
    // Declaring a new variable to call the UserSchema and requesting the whole body of it
    const newUser = new User(req.body);

    try {
      //In the try catch block the "Await" keyword has been use to wait the data, when the data has been receive in will save
      //that contains the body of UserSchema
      const savedUser = await newUser.save();

      //If the savedUser variable has received the data then it will provide a htttp status code "201" which means it the data was ---
      //--- succesfully received and it will send to "newUser" variable
      if (savedUser) res.status(201).send(newUser);
    } catch (error) {
      //So in the catch block, when the "Try" block didn't receive the data or it has some error, the catch block will display a ---
      //http status "404" and it will send a "Error" message to the user
      res.status(404).send(error);
    }
  },

  getPaginatedUser: async () => {
    //So 
    const { page = 1, limit = 10, sort = "fname", sortOrder = "asc", ...filters} = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    let { sortObj, filterObj } = {};
    sortObj[sort] = sortOrder === "asc" ? 1 : -1;
    filterObj[filters] 
    try {
      const users = await User.find()
        .sort(sortObj)
        .limit(limitNum * 1)
        .skip((pageNum - 1) * limitNum)
        .find(filterObj)
        .exec();


        const count = await User.countDocuments();
    } catch (error) {
      res.stauts(404).send(error);
    }
  },
  getUserID: async (req, res) => {
    try {
      const user = new User.find(req.params.id);
      res.status(201).send(user);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const updateUsers = await new User.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(201).send(updateUsers);
    } catch (error) {}
  },
  deleteUser: async (req, res) => {
    try {
      const deleteUser = await new User.findByIdAndDelete(req.params.id);
      res
        .status(201)
        .send({ message: "The User Has Been Successfully Deleted" });
    } catch (error) {
      res.status(404).send(error);
    }
  },
};
