
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstN: {
        type: String,
        required: true
    },
    lastN: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;