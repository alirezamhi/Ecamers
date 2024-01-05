const db = require("../../db");
const { ProductService } = require("./product.module");

const productService = new ProductService();

exports.productList = async (req, res, next) => {
  try {
    const products = await productService.getProductList();
    console.log("sssssssssssss", products);
    res.json({
      statusCode: 402,
      status: "succuss",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
