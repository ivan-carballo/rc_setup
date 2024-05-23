import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import userController from "../../src/controllers/users/userController.js";

const userData = {
    username:"karis",
    password:"123",
    role:"admin"
}

describe("Test de userController",()=>{
    
    beforeAll(async ()=>{
        await connectDB();
        try {
            await mongoose.connection.collections["users"].drop();
            
        } catch (error) {
            
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir usuario",async()=>{
        const user = await userController.create(userData);
        expect(user.username).toEqual(userData.username);
        expect(user.role).toEqual(userData.role);
    })
    test("buscar usuario por propiedad",async()=>{
        const users= await userController.getByProperty("username","usuario");
        expect(users.length).toBeGreaterThanOrEqual(1);
        const user = users[0];
        expect(user.username).toEqual(userData.username);
        expect(user.role).toEqual(userData.role);

    })
    test("buscar usuario por id",async()=>{
        const users= await userController.getByProperty("username","usuario");
        const newUser = await userController.getById(users[0]._id);
        expect(newUser).not.toBeNull();
        expect(newUser.username).toEqual(userData.username);
        expect(newUser.role).toEqual(userData.role);
    })    
})