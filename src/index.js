// main source file server - src/index.js
import express from 'express';


const app = express();
const port = 3000; //set port

app.use(express.static('public'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
app.use(express.json());
// app.use(cors());


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
    },
    {recipeName: "Egg Fried Rice",
        ingredients: ["Cooked rice", "Eggs", "soy sauce", "green onion"],
        directions: "Scramble eggs, add rice, soy sauce and green onion"
    },
    {recipeName: "Baked Salmon",
        ingredients: ["Salmon", "lemon", "olive oil", "salt & pepper"],
        directions: "Season salmon, drizzle oil and lemon, bake 400° for 10-14 minutes"
    },
    {recipeName: "Peanut Butter Banana Smoothie",
        ingredients: ["Banana", "peanut butter", "Milk (Oatmilk optional)", "ice"],
        directions: "Blend everything" 
    },
    {recipeName: "Chocolate Mug Cake",
        ingredients: ["flour", "sugar", "cocoa powder", "milk", "oil"],
        directions: "Mix in a mug, microwave 1 minute."
    }
]
//home route - get all items (Return with status 200)
app.get('/', (req, res) => {
    res.send(`<img src="./public/recipebookcover.png>`);
});

//  get all items (Return with status 200)
app.get('/recipes', (req, res) => {
    res.json(recipeBook);
})

// create a new item (Return with status 201)
app.post('/', (req, res) => {
    console.log(res.body)
    recipeBook.push(req.body);
    res.status(201).json(req.body);
})
console.log('Seeded items', recipeBook)
export default recipeBook;
//delete a item (Return with )
// app.delete('/', (req, res) => {
//     res.send('Delete something from here(DELETE)')
//     })

// //listening on port 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})