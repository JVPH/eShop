import Order from '../models/order.js'

// @desc Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = async(req, res) => {
  const { orderItems,
    shippingAddress,
    paymentMethod, 
    itemsPrice,
    taxPrice, 
    shippingPrice, 
    totalPrice 
  } = req.body

  const user = req.user

  if(orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')    
  }else {
    const order = new Order({
      orderItems,
      user: user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice      
    })

    const createdOrder = await  order.save()

    res.status(201).json(createdOrder)
  }
}

export {
  addOrderItems
}