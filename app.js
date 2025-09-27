import express from 'express';
import "./UnitConverter";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', router);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});