import express from 'express';
import connect from './config/db.js';
const app = express();
const port = 3007;

connect



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})