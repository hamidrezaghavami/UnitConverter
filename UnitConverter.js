import express from 'express';
import { convertLength, convertWeight, convertTemperature } from './convert';
import router from 'express';

const app = express();


// welcome router
app.get('/', (req, res) => { 
    res.send("Welcome to the Unit Converter website!");
});

// length router
app.get('/length/:value/:from/:to', (req, res) => {
    const { value, from, to } = req.params;

    try {
        const result = convertLength(parseFloat(value), from, to);
        res.status(200).send(`Result of your calculation: ${result} ${to}`);
    } catch (err) { 
        res.status(400).send(err.message);
    }
});

// weight router
app.get('/weight/:value/:from/:to', (req, res) => {
    const {value, from, to} = req.params;

    try {
        const result = convertWeight(parseFloat(value), from, to);
        res.status(200).send(`Result of your calculation: ${result} ${to}`);
    } catch (err) { 
        res.status(400).send(err.message);
    }
});

// tempreture router
app.get('/temperature/:value/:from/:to', (req, res) => {
    const { value, from, to} = req.params;

    try { 
        const result = convertTemperature(parseFloat(value), from, to);
        res.status(200).send(`Result of your calculation: ${result} ${to}`);
    } catch ( err) { 
        res.status(400).send(err.message);
    }
});

module.exports = router;