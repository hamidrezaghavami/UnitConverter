import express from 'express';
import router from "./UnitConverter.js";
import path from 'path';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api', router);

app.get ('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

// Server initialisation
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});