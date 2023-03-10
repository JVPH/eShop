import Product from '../models/product.js'

//@route GET /api/products
//@access Public
const getProducts = async (req, res) => {
  const products = await Product.find({})
  res.json(products)
}

//@route GET /api/products/:id
//@access Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

export {
  getProducts,
  getProductById
}