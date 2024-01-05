const db = require("../../db");
const { ProductService } = require("./product.module");

const productService = new ProductService();

exports.productList = async (req, res, next) => {
  try {
    const tasks = await productService.getProductList()
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};