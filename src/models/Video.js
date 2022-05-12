import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String}],
    

})