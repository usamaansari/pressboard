import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
       
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phone:{
        type: String,
    },
    address: {
        type: String,
    }

}, {timestamps: true});


export const User = mongoose.models?.User || mongoose.model("User", userSchema);