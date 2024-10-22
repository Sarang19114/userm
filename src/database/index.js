import mongoose from "mongoose";

const connectToDB = async () => {
    const url = "mongodb+srv://testing:testing123@cluster0.c8n0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.connect(url).then(() => console.log("Connected"))
    .catch((error) => console.log(error))
}

export default connectToDB;