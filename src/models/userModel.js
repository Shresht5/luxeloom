import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true })

export const userModel = mongoose.models.users || mongoose.model('users', userSchema)