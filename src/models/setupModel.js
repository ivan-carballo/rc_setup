import mongoose from "mongoose";

const setupSchema  = new mongoose.Schema({

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
        required: true
    },

    style: {
        type: String,
        required: true
    },

    surface: {
        type: String,
        required: true
    }
})


const setupModel = mongoose.model("setup",setupSchema);

export default setupModel;