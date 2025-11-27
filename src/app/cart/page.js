'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '@/redux/cartSlice'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const CartPage = () => {
    const cartData = useSelector((state) => state.cartData.cartData)
    const dispatch = useDispatch()

    const totalPrice = cartData.reduce(
        (sum, item) => sum + item.product.currentprice * item.qty,
        0
    )

    return (
        <div>
            <div className='bg-black'>
                <NavBar />
            </div>
            <div className="min-h-screen bg-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

                {cartData.length === 0 ? (
                    <div className="text-center text-gray-600 py-20">
                        Your cart is empty.
                    </div>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cartData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow p-4"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.product.name}</h3>
                                            <p className="text-sm text-gray-600">
                                                ₹{item.product.currentprice} × {item.qty}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Type: {item.product.clothtype}, Color: {item.product.color}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-3 sm:mt-0 flex items-center space-x-3">
                                        <p className="font-semibold text-gray-700">
                                            ₹{item.product.currentprice * item.qty}
                                        </p>
                                        <button
                                            onClick={() => dispatch(removeCart(index))}
                                            className="text-red-500 text-sm hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-between items-center border-t pt-4">
                            <h3 className="text-xl font-bold">Total</h3>
                            <p className="text-xl font-semibold text-gray-800">₹{totalPrice}</p>
                        </div>

                        <div className="mt-6 text-center">
                            <button className="bg-black text-white px-6 py-2 rounded">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default CartPage
