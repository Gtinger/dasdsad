import express from 'express';
import { createUsers, getUsers, findUsers, deleteUsers, patchUsers } from '../Controllers/users.js';

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers, getUsers, deleteUsers);

router.post('/', createUsers);

router.get('/:id', findUsers);

router.delete('/:id', deleteUsers);

router.patch('/:id', patchUsers);

export default router;