import mongoose from "mongoose";

const favSchema  = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    
    setupID : {
        type: String,
        required: true,
    }
})


const favModel = mongoose.model("fav",favSchema);

export default favModel;