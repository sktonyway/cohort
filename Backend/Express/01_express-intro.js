import express from 'express';

// This type makes architecture better for writing all routes and consuming them in place.
// as we're writing both frontend and backend together.
function block_01_basicServer(){
    return new Promise((resolve) => {
        const app = express();
        // This is a middleware which says from from frontend look for json and manage data.
        app.use(express.json())

        // It is an API endpoint, which is exposed to users, GET endpoint here registering a handler at /menu 
        // res.json is setting content-type to application/json and sending serialized object
        app.get('/menu', (req, res)=>{
            res.json({
                items: [
                    'roti',
                    'biryani',
                    'litti'
                ]
            })
        })

        // Here query based search 
        app.get('/search', (req,res)=>{
            
        })
    })
}

async function main() {
    await block_01_basicServer()
}
main();