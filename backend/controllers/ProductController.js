import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  const { category } = req.query;
  try {
    let products;
    if (category) {
      products = await Product.findAll({ where: { category } });
    } else {
      products = await Product.findAll();
    }
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(201).json({ msg: "Product Created" });
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Product Updated" });
  } catch (error) {
    console.log(error);
  }
}
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Product Deleted" });
  } catch (error) {
    console.log(error);
  }
}