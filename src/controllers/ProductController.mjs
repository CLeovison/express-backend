import Products from "../model/Products/Products.mjs";

export const ProductController = {
  createProduct: async (req, res) => {
    try {
      const { available, productinfo, variants } = req.body;

      const newProduct = new Products({
        available,
        productinfo,
        variants,
        image: {
          filename: req.file.filename,
        },
      });

      const result = await Products.create(newProduct);
      if (!result) {
        res.status(400).send({ message: "Product did not saved" });
      } else {
        res.status(201).send(result);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  paginatedProducts: async (req, res) => {
    const {
      limit = 10,
      page = 1,
      sort = "productname",
      sortBy = "asc",
      ...filters
    } = req.query;

    const filtersObj = { isSoftDelete: "false", ...filters };

    Object.keys(filtersObj).forEach((x) => {
      if (x.substring(0, 2) == "is") {
        if (filtersObj[x].toLowerCase() == "any") delete filtersObj[x];
      } else {
        filtersObj[x] = new RegExp(filtersObj[x].trim(), "i");
      }
      return x;
    });

    try {
      const productPaginated = await Products.find(filtersObj)
        .sort({ [sort]: sortBy === "asc" ? 1 : -1 })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));

      const count = await Products.countDocuments();
      const totalPage = Math.ceil(count / limit);

      res.status(200).json({
        productPaginated,
        totalPage,
        limit,
        count: productPaginated.length,
      });
    } catch (error) {
      console.log(error);
      res.status(401).send(error);
    }
  },

  getProductID: async (req, res) => {
    try {
      const productID = await Products.findById(req.params.id);
      res.status(200).send(productID);
    } catch (error) {
      res.status(401).json({ message: "Can't Find The ID", error });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updateProducts = await Products.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      const newlyProduct = await Products.findById(req.params.id);

      res.status(200).json({
        message: "The Product Has Been Successfully Updated",
        newlyProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "The Product ID was not registered" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deleteProducts = await Products.findById(req.params.id);
      deleteProducts.isSoftDelete = true;
      deleteProducts.save();
      res.status(200).json({ message: "The Product is Successfully Deleted" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "The Product is not Deleted", error });
    }
  },

  getImage: async (req, res) => {
    const { image } = req.file.filename;

    try {
      const getImage = await Products.findById({ image });
      if (!getImage) {
        res.status(404).json({ message: "The Image Doesn't Exist" });
      }
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
