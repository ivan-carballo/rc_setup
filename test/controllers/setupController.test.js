/* import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import setupController from "../../src/controllers/setup/setupController.js";

const setupData = {
    owner: 'Karis',
    differential: 5000,
    camber: 5,
    height: 2.5,
    convergence: 3,
    ackerman: 2,
    chasis: 'ST-1',
    style: 'neutral',
    surface: 'tarmac'
}

describe("Test de setupController",()=>{
    
    beforeAll(async ()=>{
        await connectDB();
        try {
            await mongoose.connection.collections["setups"].drop();
            
        } catch (error) {
            
        }
    })

    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir setup",async()=>{
        const setup = await setupController.create(setupData);
        expect(setup.differential).toEqual(setupData.differential);
        expect(setup.camber).toEqual(setupData.camber);
        expect(setup.height).toEqual(setupData.height);
        expect(setup.convergence).toEqual(setupData.convergence);
        expect(setup.ackerman).toEqual(setupData.ackerman);
        expect(setup.chasis).toEqual(setupData.chasis);
        expect(setup.style).toEqual(setupData.style);
        expect(setup.surface).toEqual(setupData.surface);
    })

    test("buscar setup por propiedad",async()=>{
        const setups = await setupController.getByProperty("surface","tarmac");
        expect(setups.length).toBeGreaterThanOrEqual(1);
        const setup = setups[0];
        expect(setup.differential).toEqual(setupData.differential);
        expect(setup.camber).toEqual(setupData.camber);
        expect(setup.height).toEqual(setupData.height);
        expect(setup.convergence).toEqual(setupData.convergence);
        expect(setup.ackerman).toEqual(setupData.ackerman);
        expect(setup.chasis).toEqual(setupData.chasis);
        expect(setup.style).toEqual(setupData.style);
        expect(setup.surface).toEqual(setupData.surface);

    })

    test("buscar setup por id",async()=>{
        const setup = await setupController.getByProperty("surface","tarmac");
        const newsetup = await setupController.getById(setup[0]._id);
        expect(newsetup).not.toBeNull();
        expect(newsetup.differential).toEqual(setupData.differential);
        expect(newsetup.camber).toEqual(setupData.camber);
        expect(newsetup.height).toEqual(setupData.height);
        expect(newsetup.convergence).toEqual(setupData.convergence);
        expect(newsetup.ackerman).toEqual(setupData.ackerman);
        expect(newsetup.chasis).toEqual(setupData.chasis);
        expect(newsetup.style).toEqual(setupData.style);
        expect(newsetup.surface).toEqual(setupData.surface);
    }) 
}) */