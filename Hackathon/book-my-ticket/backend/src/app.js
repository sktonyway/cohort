import express from 'express'

const app = express();


// some middlewares 
app.use(express.json())



// some routes


export default app;