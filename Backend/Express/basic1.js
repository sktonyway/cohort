import express from 'express';

function basicServer() {
    return new Promise((resolve) => {
        const app = express();

        app.get('/users', (req, res) => {
            res.json({
                message: "This is get message for /user route "
            })
        })
        app.get('/search', (req, res) => {
            // This is query parameter, params are destructured Eg; /search?q=shoe&limit=5 processed to {q: "shoe", limit: "5"}
            // Req coming ->query is json because of app.use(express.json()) -> destructured -> processing -> serialised -> response
            console.log(req.query)
            const { q, limit } = req.query; // It is like const {q, limit} = {q: "banana", limit: "200"} when /search?q=banana&limit=200 
            res.json({
                query: q,
                limit: limit || 10
            })
        })

        // This is route based parameter, anything after /menu/ is set to req.params.id
        app.get('/menu/:id', (req, res) => {
            console.log(req.params)  // /menu/this -> {id: 'this'} since id is defined in route
            const id = req.params.id
            res.json({
                message: "This is a route parameter",
                id: id,
                status: "working nice!"
            })
        })
        app.get('/memory', (req, res) => {
            const usage = process.memoryUsage();
            res.json({
                rss: `${Math.round(usage.rss / 1024 / 1024 * 100) / 100} MB`, // Total memory allocated
                heapUsed: `${Math.round(usage.heapUsed / 1024 / 1024 * 100) / 100} MB` // Actual data stored
            });
        });

        app.post('/order', (req, res) => {
            const order = req.body;
            res.json({
                message: "order created",
                order
            }).status(200)
        })
        app.listen(5000, () => { console.log('Server is running') })
        // Here 0 is saying to take any free port
        //app.listen() has many methods like address 
        const server = app.listen(0, async ()=>{
            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`

            try {
                const menuRes = await fetch(`${base}/users`);
                const menuData = await menuRes.json()
                console.log('GET /users', JSON.stringify(menuData))

                console.log('++++++++++\n GET \n+++++++++++++++')

                const search = await fetch(`${base}/search?q=apple&limit=12`)
                const searchData = await res.json(search)
                console.log('GET /search with query',JSON.stringify(searchData))

                console.log('++++++++++++++++++++++++++++')

                const id = await fetch(`${base}/menu/43`)
                const idRes = await id.json()
                console.log('GET /menu:id', JSON.stringify(idRes))

                console.log('++++++++++++++++++++++++')

                const order = await fetch(`${base}/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            } catch (error) {
                
            }
        })
        console.log(app.listen().address().port)
    })
}
async function main() {
    await basicServer();
}
main()