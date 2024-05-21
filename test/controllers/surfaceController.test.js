import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import surfaceController from "../../src/controllers/surface/surfaceController.js";

const surfaceData = {
    surface:"wet"
}

describe("Test de surfaceController",()=>{
    
    beforeAll(async ()=>{
        await connectDB();
        try {
            await mongoose.connection.collections["surfaces"].drop();
            
        } catch (error) {
            
        }
    })

    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir terreno",async()=>{
        const surface = await surfaceController.create(surfaceData);
        expect(surface.surface).toEqual(surfaceData.surface);
    })

    test("buscar usuario por propiedad",async()=>{
        const surfaces = await surfaceController.getByProperty("surface","wet");
        expect(surfaces.length).toBeGreaterThanOrEqual(1);
        const surface = surfaces[0];
        expect(surface.surface).toEqual(surfaceData.surface);

    })

    test("buscar usuario por id",async()=>{
        const surface = await surfaceController.getByProperty("surface","wet");
        const newSurface = await surfaceController.getById(surface[0]._id);
        expect(newSurface).not.toBeNull();
        expect(newSurface.surface).toEqual(surfaceData.surface);
    }) 

    test("actualizar terreno a mojado", async() => {
        const actualizarSurface =  { surface:'wet gravel' }
        const surface = await surfaceController.update('664c8c12347593c686053d00', actualizarSurface);
        //expect(surface.surface).toEqual(actualizarSurface.surface);
    })
})