// main source file server - src/index.js
import express from 'express';
import cors from 'cors';
import {randomUUID} from 'node:crypto';

const app = express();
const port = 3000; //set port

// middleware
app.use(express.static('public'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
app.use(express.json());
app.use(cors());


//seeded data
let recipeBook = [
    {id: randomUUID(),
        recipeName: "Honey Garlic Chicken", 
        ingredients: ["chicken thighs or breasts", "honey", "soy sauce", "minced garlic", "olive oil"],
        directions: "Sear chicken in olive oil. Mix honey, soy sauce and garlic, pour over, simmer 10-12 minutes until sticky." 
    },
    {id: randomUUID(),
        recipeName: "Lemon Butter Pasta",
        ingredients: ["pasta", "butter", "lemon (juice + zest)", "parmesan"],
        directions: "Cook pasta, melt butter, add lemon, toss everything with parmesan."
    },
    {id: randomUUID(),
        recipeName: "Salsa Chicken",
        ingredients: ["chicken breast", "jar of salsa", "cheese(optional)"],
        directions: "Bake chicken with salsa poured on top (375° for ~25 min. Add cheese last 5 minutes."
    },
    {id: randomUUID(),
        recipeName: "Garlic Butter Shrimp",
        ingredients: ["shrimp", "butter", "garlic", "lemon"],
        directions: "Saute garlic in butter, add shrimp, cook 2-3 minutes, squeeze lemon."
    },
    {id: randomUUID(),
        recipeName: "Avocado Toast",
        ingredients: ["Bread", "avocado", "salt", "red pepper flakes"],
        directions: "Toast bread, mash avocado, spread it, season."
    },
    {id: randomUUID(),
        recipeName: "Sausage & Peppers Skillet",
        ingredients: ["Smoked sausage", "bell peppers", "onion"],
        directions: "Slice everything and saute until browned."
    },
    {id: randomUUID(),
        recipeName: "Egg Fried Rice",
        ingredients: ["Cooked rice", "Eggs", "soy sauce", "green onion"],
        directions: "Scramble eggs, add rice, soy sauce and green onion"
    },
    {id: randomUUID(),
        recipeName: "Baked Salmon",
        ingredients: ["Salmon", "lemon", "olive oil", "salt & pepper"],
        directions: "Season salmon, drizzle oil and lemon, bake 400° for 10-14 minutes"
    },
    {id: randomUUID(),
        recipeName: "Peanut Butter Banana Smoothie",
        ingredients: ["Banana", "peanut butter", "Milk (Oatmilk optional)", "ice"],
        directions: "Blend everything" 
    },
    {id: randomUUID(),
        recipeName: "Chocolate Mug Cake",
        ingredients: ["flour", "sugar", "cocoa powder", "milk", "oil"],
        directions: "Mix in a mug, microwave 1 minute."
    }
]
//home route - get all items (Return with status 200)
app.get('/', (req, res) => {
    res.send(`
        <h1>5 Ingredient Recipes</h1>
        `);
});

//  get all items (Return with status 200)
app.get('/recipes', (req, res) => {
    res.json(recipeBook);
})

// get a recipe by id
app.get('/recipes/:id', (req, res) => {
    const recipe = recipeBook
    .find((r) => r.id === req.params.id);

    if(!recipe){
        return res.status(404).json({
            error: 'Recipe not found'
        })
    }
    //show recipe
    res.json(recipe);

    console.log("Looking for ID: ", req.params.id)
})

// create a new item (Return with status 201)
app.post('/recipes', (req, res) => {
    console.log(req.body)

    if(req.body === undefined){
        res.status(400)
        return res.json({
            error: {
                message: "No body in request"
            }
        })
    }

    if(req.body.recipeName === undefined){
        res.status(400)
        return res.json({
            error: {
                message: "No recipe name in request"
            }
        })
    }

    console.log(req.body.recipeName);
    console.log(req.body.ingredients);
    console.log(req.body.directions);

    const newRecipe = {
        id: randomUUID(),
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    }

    //visualize new recipe
    console.log("Created:" , newRecipe)
    //add new recipe to list
    recipeBook.push(newRecipe);

    //new item returned with 201 status
    res.status(201).json(newRecipe);

    console.log('Post /recipes', newRecipe)
})
console.log('Seeded items', recipeBook)

//delete a item (Return with )
app.delete('/recipes/:id', (req, res) => {
    const recipe = recipeBook
    .find((r) => r.id === req.params.id);

    if(!recipe){
       return res.status(404)
        .json({
            error: 'Recipe not found'
        })
    }

    recipeBook = recipeBook.filter((r) => r.id !== req.params.id);
    res.status(200).json({
        message: 'Recipe deleted successfully',
        deletedItem: recipe
    })

})

// //listening on port 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})