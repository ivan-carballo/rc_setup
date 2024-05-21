import mongoose from "mongoose";

const chasisSchema  = new mongoose.Schema({

    chasis : {
        type: String,
        required: true,
        unique: true
    }
})


const chasisModel = mongoose.model("chases",chasisSchema);

export default chasisModel;