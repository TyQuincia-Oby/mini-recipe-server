// main source file server - src/index.js
import express from 'express';

const app = express();
const port = 3000; //set port

//home route
app.get('/', (req, res) => {
    res.send('Hello World its Ty!(GET LIST)');
});

// app.get

// app.post('/', (req, res) => {
//     res.send('Add something from here(POST)')
// })

// app.delete('/', (req, res) => {
//     res.send('Delete something from here(DELETE)')
//     })

// //listening on port 3000
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`)
// })