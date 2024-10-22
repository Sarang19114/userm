"use server";

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

export async function addNewUserAction(formData, pathToRevalidate) {
    try {
        await connectToDB();

        const newlyCreatedUser = await User.create(formData);
        if(newlyCreatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User added successfully",
            }
        } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            }
        }
    } catch(error) {
        console.log(error);
        return {
            success: false,
            message: "Some error occured! Please try again",
        }
}
}

export async function fetchUsersAction() {
    try {
        await connectToDB();
        const extractUsers = await User.find({})
        if(extractUsers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(extractUsers))
            }
        } else {
            return {
                success: false,
                message: "Some error occured! Please try again"
            }
        }

    } catch(error) {
        console.log(error);
        return {
            success: false,
            message: "Some error occured! Please try again"
        }
    }
}

export async function deleteUserAction(currentUserID, pathToRevalidate) {
    try {
        await connectToDB();
        const deletedUser = await User.findByIdAndDelete(currentUserID)
        if(deletedUser) {
            revalidatePath(pathToRevalidate)
            return {
                success: true,
                message: "User deleted successfully",
            }
        } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            }
        }
    } catch(error) {
        console.log(error);
        return {
            success: false,
            message: "Some error occured! Please try again",
        }
    }
}


export async function editUserAction(params) {
    
}