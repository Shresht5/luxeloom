import mongoose from "mongoose"
const productSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    currentprice: { type: Number, required: true },
    mrp: { type: Number, required: true },
    image: String,
    color: { type: String },
    clothtype: { type: String },
    producttype: { type: String },
    detail: { type: String }
}, { timestamps: true });
const productModel = mongoose.models.products || mongoose.model('products', productSchema);
export default productModel;