import Products from "../model/Products/Products.mjs";

export const ProductController = {
  createProduct: async (req, res) => {
    const newProduct = new Products(req.body);

    const productExist = await Products.findOne({ _id: req.body._id });

    if (productExist) return res.status(401).send("The Item Already Exist");

    try {
      const savedProduct = await newProduct.save();
      res.status(200).send({ message: "You Successfully Created A Product" });
    } catch (error) {
      console.log(error);

      res.status(404).send(error);
    }
  },
  paginatedProducts: async (req, res) => {},

  deleteProduct: async (req, res) => {
    try {
      const deleteProducts = await Products.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "The Product is Successfully Deleted" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "The Product is not Deleted", error });
    }
  },

  searchProduct: async (req, res) => {
    const searchProduct = req.query.products;

    if (!searchProduct) {
      return res.status(400).json({ message: "No search provided" });
    }

    try {
      const results = await Products.find({
        $text: { $search: searchProduct },
      });
      res.status(200).json(results);
    } catch (error) {
      console.log(error);
      res.status(404).send(error);
    }
  },
};
