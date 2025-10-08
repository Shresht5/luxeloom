import mongoose from "mongoose"
const orderSchema = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'products', },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', },
    qty: { type: Number, },
    paymentdone: { type: Boolean, default: false },
    orderdone: { type: Boolean, default: false },
}, { timestamps: true });
const orderModel = mongoose.models.orders || mongoose.model('orders', orderSchema);
export default orderModel;