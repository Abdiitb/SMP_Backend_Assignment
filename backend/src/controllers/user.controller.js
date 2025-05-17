import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js'

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const admin = await User.findById(userId);

        if (!admin) {
            throw new ApiError(404, "No user found");
        }

        const accessToken = await admin.generateAccessToken();
        const refreshToken = await admin.generateRefreshToken();

        admin.refreshToken = refreshToken;
        admin.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, `Problem in generating accessToken and refreshToken ${error}`);
    }
}

const createNewUser = asyncHandler(async (req, res) => {
    const { name, email, age, isActive } = req.body;

    if (!(name || email)) {
        throw new ApiError(400, "Name or Email is missing");
    }

    const user = await User.create({
        name: name,
        email: email,
        age: age,
        isActive: isActive,
    })

    if (!user) {
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
    if (!users) {
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

    if (!user) {
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

    if (!(name || email)) {
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

    if (!user) {
        throw new ApiError(404, "No user found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "User details updated successfully")
        );
})

const deleteUser = asyncHandler(async (req, res) => {
    const deleteResponse = await User.deleteOne({
        _id: req.params.id
    });

    if (!deleteResponse) {
        throw new ApiError(500, "Problem in deleting user");
    }

    if (deleteResponse.deletedCount === 0) {
        throw new ApiError(404, "No user found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, deleteResponse, "User deleted successfully")
        );
})

const adminLogin = asyncHandler(async (req, res) => {
    // Take data from request
    // Check username/email
    // find user
    // Validate password
    // generate accessToken and refreshToken
    // send cookie

    const { username, password } = req.body
    console.log("username :", username);

    if (!(username)) {
        throw new ApiError(400, "Username or Email is missing");
    }

    const adminUser = await User.findOne({ username, isAdmin: true });

    if (!adminUser) {
        throw new ApiError(400, "Invalid username");
    }

    const isPasswordValid = await adminUser.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(400, "Password is incorrect");
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(adminUser._id);

    const loggedInUser = await User.findById(adminUser._id).select("-password -refreshToken"); // For sending updated user data in backend as the previous user variable did not have refreshToken so we fetch updated user from db

    const options = {
        httpOnly: true,
        secure: true
    } // For security so that cookies can only be modified from server side

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User Logged In Successfully")
        )
})

const adminLogout = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "User Logged Out Successfully")
        )
})

// const createAdminUser = asyncHandler(async (req, res) => {
//     const { username, password, user } = req.body;

//     if (!(username || password)) {
//         throw new ApiError(400, "Username or Password is missing");
//     }

//     const admin = await Admin.create({
//         username,
//         password
//     })

//     return res
//         .status(200)
//         .json(
//             new ApiResponse(
//                 200,
//                 admin,
//                 "Admin User Created Successfully"
//             )
//         )
// })

const createNewAdminUser = asyncHandler(async (req, res) => {
    const { name, email, age, isActive, isAdmin, username, password } = req.body;

    if (!(name || email || username || password)) {
        throw new ApiError(400, "Name or Email or Username or Password is missing");
    }

    const user = await User.create({
        name: name,
        email: email,
        age: age,
        isActive: isActive,
        isAdmin: isAdmin,
        username: username,
        password: password
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Problem in creating admin user");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, createdUser, "Admin User created successfully")
        );
})

export {
    createNewUser,
    getAllUsers,
    getUserByID,
    updateUserDetails,
    deleteUser,
    adminLogin,
    adminLogout,
    createNewAdminUser,
}