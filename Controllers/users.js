import { v4 as uuidv4} from 'uuid';
import { Karsten, lonse } from "../Model/hardcode.js";
let users = [];

export const createUsers = (req,res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database!`);
};

users.push({Karsten, id: uuidv4()});
users.push({lonse, id: uuidv4()});

export const getUsers = (req,res) => {
    console.log(users);
    res.send(users);
};

export const findUsers = (req,res) => {
    const {id}= req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser); 
};

export const deleteUsers = (req,res) => {
    const {id}= req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id: ${id} deleted from database`)
};

export const patchUsers = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);
    
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
};