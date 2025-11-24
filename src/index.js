// main source file server - src/index.js
import express from 'express';

const app = express();
const port = 3000; //set port



//seeded data
const recipeBook = [
    {recipeName: "Honey Garlic Chicken", 
        ingredients: ["chicken thighs or breasts", "honey", "soy sauce", "minced garlic", "olive oil"],
        directions: "Sear chicken in olive oil. Mix honey, soy sauce and garlic, pour over, simmer 10-12 minutes until sticky." 
    },
    {recipeName: "Lemon Butter Pasta",
        ingredients: ["pasta", "butter", "lemon (juice + zest)", "parmesan"],
        directions: "Cook pasta, melt butter, add lemon, toss everything with parmesan."
    },
    {recipeName: "Salsa Chicken",
        ingredients: ["chicken breast", "jar of salsa", "cheese(optional)"],
        directions: "Bake chicken with salsa poured on top (375° for ~25 min. Add cheese last 5 minutes."
    },
    {recipeName: "Garlic Butter Shrimp",
        ingredients: ["shrimp", "butter", "garlic", "lemon"],
        directions: "Saute garlic in butter, add shrimp, cook 2-3 minutes, squeeze lemon."
    },
    {recipeName: "Avocado Toast",
        ingredients: ["Bread", "avocado", "salt", "red pepper flakes"],
        directions: "Toast bread, mash avocado, spread it, season."
    },
    {recipeName: "Sausage & Peppers Skillet",
        ingredients: ["Smoked sausage", "bell peppers", "onion"],
        directions: "Slice everything and saute until browned."
    }
]
//home route - get all items (Return with status 200)
app.get('/', (req, res) => {
    res.send(`Hello World`);
});

// app.get

//create a new item (Return with status 201)
// app.post('/', (req, res) => {
//     res.send('Add something from here(POST)')
// })

//delete a item (Return with )
// app.delete('/', (req, res) => {
//     res.send('Delete something from here(DELETE)')
//     })

// //listening on port 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})