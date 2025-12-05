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

// get a recipe by id - supabase
app.get('/recipes/:id', async (req, res) => {
    //fetch data from table in supabase
    const { data, error } = await supabase
    .from('recipeBook') //table name
    .select('*') //select everything
    .eq('id', req.params.id) //filter id for selected id
    .single(); //show that one recipe by id

     //handle errors: if the database fails, return error code 500
    if (error){
        return res.status(500).json({
            error : "error.message"
        })
    }

    //return data with status code 200
    res.json(data);

})


// post with supabase connection
app.post('/recipes', async (req, res) => {
    //things that should be in request body 
    const { recipe_name, ingredients, directions} = req.body;

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
    res.status(201).json(data)
})

//delete a item (Return with 200)
app.delete('/recipes/:id', async (req, res) => {
    const { id, error } = req.params.id;
    
    await supabase
    .from('recipeBook')
    .delete()
    .eq('id', id )

    if (error){
        console.log(error);
        return res.status(500).
        json({error: error.message})
    }

    res.status(200).json({Message : 'Recipe deleted successfully'})
})

//update an existing resource 
app.put('/recipes/:id', async (req, res) =>{
    const id = req.params.id;
    const { recipe_name, ingredients, directions} = req.body;

    const updatedRecipe = {
        recipe_name,
        ingredients,
        directions
    };

    const { data } = await supabase
    .from('recipeBook')
    .update(updatedRecipe)
    .eq('id', id)
    .select();

    res.json(data[0]);
});

// //listening on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})