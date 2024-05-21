import mongoose from "mongoose";

const surfaceSchema  = new mongoose.Schema({

    surface : {
        type: String,
        required: true,
        unique: true
    }
})


const surfaceModel = mongoose.model("surfaces",surfaceSchema);

export default surfaceModel;