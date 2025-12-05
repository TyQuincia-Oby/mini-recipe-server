console.log("Starting server...")
// main source file server - src/index.js
import express from 'express';
import cors from 'cors';
import {randomUUID} from 'node:crypto';
import supabase from './supabase.js' //import connection

const app = express();
const PORT = 3000; //set port

// middleware
app.use(express.static('public'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
app.use(express.json());
app.use(cors());

//home route - get all items (Return with status 200)
app.get('/', (req, res) => {
    res.send(`
        <h1>5 Ingredient Recipes</h1>
        `);
});


// get with supabase connection
//  get all items (Return with status 200)
app.get('/recipes', async (req, res) =>{
    console.log("Hello from supabase")
    //fetch data from table in supabase
    const {data, error } = await supabase
    .from('recipeBook') //table name
    .select('*'); //select everything

    //handle errors: if the database fails, return error code 500
    if (error){
        return res.status(500).json({
            error : "error.message"
        })
    }

    //return data with status code 200
    res.json(data);
});

// get a recipe by id
// app.get('/recipes/:id', (req, res) => {
//     const recipe = recipeBook
//     .find((r) => r.id === req.params.id);

//     if(!recipe){
//         return res.status(404).json({
//             error: 'Recipe not found'
//         })
//     }
//     //show recipe
//     res.json(recipe);

//     console.log("Looking for ID: ", req.params.id)
// })

// create a new item (Return with status 201) just express
// app.post('/recipes', (req, res) => {
//     console.log(req.body)

//     if(req.body === undefined){
//         res.status(400)
//         return res.json({
//             error: {
//                 message: "No body in request"
//             }
//         })
//     }

//     if(req.body.recipeName === undefined){
//         res.status(400)
//         return res.json({
//             error: {
//                 message: "No recipe name in request"
//             }
//         })
//     }

//     console.log(req.body.recipeName);
//     console.log(req.body.ingredients);
//     console.log(req.body.directions);

//     const newRecipe = {
//         id: randomUUID(),
//         recipeName: req.body.recipeName,
//         ingredients: req.body.ingredients,
//         directions: req.body.directions
//     }

//     //visualize new recipe
//     console.log("Created:" , newRecipe)
//     //add new recipe to list
//     recipeBook.push(newRecipe);

//     //new item returned with 201 status
//     res.status(201).json(newRecipe);

//     console.log('Post /recipes', newRecipe)
// })
// console.log('Seeded items', recipeBook)

// post with supabase connection
app.post('/recipes', async (req, res) => {
    console.log("Hello from post")
    //things that should be in request body 
    const { recipe_name, ingredients, directions} = req.body;

    console.log("Request body:" , req.body)

    //create new recipe
    const newRecipe = {
        recipe_name,
        ingredients,
        directions
    };

    //update supabase with new recipe
    const {data, error} = await supabase //tell supabase
    .from('recipeBook') //update recipeBook
    .insert(newRecipe) //with new recipe
    .select() //view list
    .single();//returns one item

    if (error){
        console.log(error);
        return res.status(500).
        json({error: error.message})
    }
    console.log(newRecipe)
    res.status(201).json(data)
})

//delete a item (Return with )
// app.delete('/recipes/:id', (req, res) => {
//     const recipe = recipeBook
//     .find((r) => r.id === req.params.id);

//     if(!recipe){
//        return res.status(404)
//         .json({
//             error: 'Recipe not found'
//         })
//     }

//     recipeBook = recipeBook.filter((r) => r.id !== req.params.id);
//     res.status(200).json({
//         message: 'Recipe deleted successfully',
//         deletedItem: recipe
//     })

// })

// //listening on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})