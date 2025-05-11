import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import mongoose from 'mongoose';
import { User } from '../models/user.model.js'

const createNewUser = asyncHandler(async (req, res) => {
    const { name, email, age, isActive } = req.body;

    if(!(name || email)){
        throw new ApiError(400, "Name or Email is missing");
    }

    const user = await User.create({
        name: name,
        email: email,
        age: age,
        isActive: isActive
    })

    if(!user){
        throw new ApiError(500, "Problem in creating user");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "User created successfully")
    );
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    if(!users){
        throw new ApiError(404, "No user found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, users, "Users fetched successfully")
    )
})

const getUserByID = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        throw new ApiError(404, "No user found");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "User fetched successfully")
    );
})

const updateUserDetails = asyncHandler(async (req, res) => {
    const { name, email, age, isActive } = req.body;

    if(!(name || email)){
        throw new ApiError(400, "Name or Email is missing");
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            email: email,
            age: age,
            isActive: isActive
        },
        {
            new: true
        }
    )

    if(!user){
        throw new ApiError(404, "No user found");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "User details updated successfully")
    );    
})

const deleteUser = asyncHandler(async (req, res) => {
    return await User.deleteOne({
        _id: req.params.id
    });
})

export { 
    createNewUser,
    getAllUsers,
    getUserByID,
    updateUserDetails,
    deleteUser
}