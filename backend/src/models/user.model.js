import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    age: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);