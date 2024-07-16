import Category from "../models/CategoryModel.js";

export const getCategorie = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(201).json({ msg: "Category Created" });
  } catch (error) {
    console.log(error);
  }
}

export const updateCategory = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id
      } 
    });
    res.status(200).json({ msg: "Category Updated" });
  } catch (error) {
    console.log(error);
  } 
}

export const deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Category Deleted" });
  } catch (error) {
    console.log(error);
  }
}