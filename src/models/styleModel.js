import mongoose from "mongoose";

const styleSchema  = new mongoose.Schema({

    style : {
        type: String,
        required: true,
        unique: true
    }
})


const styleModel = mongoose.model("style",styleSchema);

export default styleModel;