import { convertLength, convertWeight, convertTemperature } from './convert.js';
import express from 'express';

// we have seperate files for this project so we use it
const router = express.Router();

// welcome router
router.get('/', (req, res) => { 
    res.send("Welcome to the Unit Converter website!");
});

// length router
router.get('/length/:value/:from/:to', (req, res) => {
    const { value, from, to } = req.params;

    try {
        const result = convertLength(parseFloat(value), from, to);
        res.status(200).send(`Result of your calculation: ${result} ${to}`);
    } catch (err) { 
        res.status(400).send(err.message);
    }
});

// weight router
router.get('/weight/:value/:from/:to', (req, res) => {
    const {value, from, to} = req.params;

    try {
        const result = convertWeight(parseFloat(value), from, to);
        res.status(200).send(`Result of your calculation: ${result} ${to}`);
    } catch (err) { 
        res.status(400).send(err.message);
    }
});

// tempreture router
router.get('/temperature/:value/:from/:to', (req, res) => {
    const { value, from, to} = req.params;

    try { 
        const result = convertTemperature(parseFloat(value), from, to);
        res.status(200).send(`Result of your calculation: ${result} ${to}`);
    } catch ( err) { 
        res.status(400).send(err.message);
    }
});

export default router;