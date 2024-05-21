import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import chasisController from "../../src/controllers/chasis/chasisController.js";

const chasisData = {
    chasis:"ST-1"
}

describe("Test de chasisController",()=>{
    
    beforeAll(async ()=>{
        await connectDB();
        try {
            await mongoose.connection.collections["chases"].drop();
            
        } catch (error) {
            
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir chasis",async()=>{
        const chasis = await chasisController.create(chasisData);
        expect(chasis.chasis).toEqual(chasisData.chasis);
    })

    test("buscar chasis por propiedad",async()=>{
        const chasis1 = await chasisController.getByProperty("chasis","ST-1");
        expect(chasis1.length).toBeGreaterThanOrEqual(1);
        const chasis = chasis1[0];
        expect(chasis.chasis).toEqual(chasisData.chasis);
    }) 

    test("buscar chasis por id",async()=>{
        const chasis = await chasisController.getByProperty("chasis","ST-1");
        const newchasis = await chasisController.getById(chasis[0]._id);
        expect(newchasis).not.toBeNull();
        expect(newchasis.chasis).toEqual(chasisData.chasis);
    })
})