import express from 'express';
import db from './config/db.js'

const app = express();
const port = 3007;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})