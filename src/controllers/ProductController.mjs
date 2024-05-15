import Products from "../model/Products/Products.mjs";

export const ProductController = {
  createProduct: async (req, res) => {
    const newProduct = new Products(req.body);

    const productExist = await Products.findOne({ _id: req.body._id });

    if(productExist) return res.status(401).send("The Item Already Exist")

    try{
    const savedProduct = await newProduct.save()
    }catch(error){
        console.log(error);
    
        res.status(404).send(error)
    }
  },
};
