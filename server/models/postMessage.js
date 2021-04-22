import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: String,
    creator: {
        type: String,
        required: true
    },
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;