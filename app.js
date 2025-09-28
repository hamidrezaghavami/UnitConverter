import express from 'express';
import router from "./UnitConverter.js";

const app = express();
app.use(express.json());
app.use(express.static('public')); // 

const PORT = process.env.PORT || 3000;

app.use('/api', router);

// Server initialisation
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});