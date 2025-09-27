import express from 'express';
import router from "./UnitConverter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', router);

// Server initialisation
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});