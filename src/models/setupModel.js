import mongoose from "mongoose";

const setupSchema  = new mongoose.Schema({

    owner: {
        type: String,
        required: true
    },
    
    differential : {
        type: Number,
        required: true,
        unique: false
    },
    
    camber: {
        type: Number,
        required: true, 
        unique: false
    },

    height: {
        type: Number,
        required: true, 
    },

    convergence: {
        type: Number,
        required: true,
        unique: false
    },

    ackerman: {
        type: Number, 
        required: true,
        unique: false,
    },

    chasis: {
        type: String,
        required: true,
        enum: ["EB4-S2","EB4-S3", "ST-1", "MTA-4"],
        default: "EB4-S3"
    },

    style: {
        type: String,
        required: true,
        enum: ["oversteer","neutral", "understeer"],
        default: "neutral"
    },

    surface: {
        type: String,
        required: true,
        enum: ["tarmac","wet tarmac", "gravel", "wet gravel"],
        default: "tarmac"
    }
})


const setupModel = mongoose.model("setup",setupSchema);

export default setupModel;