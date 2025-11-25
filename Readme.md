# CRUD API in Memory

A RESTful Express API that implements core CRUD operations using in-memory data storage. This project demonstrates Express route handling, HTTP status codes, JSON responses, and error handling patterns.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Vitest** - Testing framework (optional)
- **Supertest** - HTTP assertion library (optional)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Postman or similar REST client (for testing)

## 🛠️ Setup Instructions

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The server will start on `http://localhost:3000` (or the port specified in your code).

## 📚 API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

#### GET /recipes
Returns all recipes in the collection.

**Response:** `200 OK`
```json
[
    {id: randomUUID(),
        recipeName: "Honey Garlic Chicken", 
        ingredients: ["chicken thighs or breasts", "honey", "soy sauce", "minced garlic", "olive oil"],
        directions: "Sear chicken in olive oil. Mix honey, soy sauce and garlic, pour over, simmer 10-12 minutes until sticky." 
    },
    {id: randomUUID(),
        recipeName: "Lemon Butter Pasta",
        ingredients: ["pasta", "butter", "lemon (juice + zest)", "parmesan"],
        directions: "Cook pasta, melt butter, add lemon, toss everything with parmesan."
    }
]
```

#### POST /recipes
Creates a new recipe in the collection.

**Request Body:**
```json
{
    "recipeName": "Garlic Mushroom Pasta",
    "ingredients": ["pasta", "mushrooms", "olive oil", "garlic", "parsley"],
    "directions": "Saute mushrooms with garlic, toss with pasta and parsley"
}
```

**Response:** `201 Created`
```json
{"id":"666d2d6b-6324-400c-9eb5-2d193306c94c","recipeName":"Garlic Mushroom Pasta","ingredients":["pasta","mushrooms","olive oil","garlic","parsley"],"directions":"Saute mushrooms with garlic, toss with pasta and parsley"}
```

#### GET /recipes/:id
Retrieves a specific recipe by ID.

**Response:** `200 OK`
```json
{"id":"666d2d6b-6324-400c-9eb5-2d193306c94c","recipeName":"Garlic Mushroom Pasta","ingredients":["pasta","mushrooms","olive oil","garlic","parsley"],"directions":"Saute mushrooms with garlic, toss with pasta and parsley"}
```

**Error Response:** `404 Not Found`
```json
{"error":"Item not found"}
```

#### DELETE /recipes/:id
Removes a specific recipe from the collection.

**Response:** `200 OK`
```json
{
  "message": "Recipe deleted successfully"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Recipe not found"
}
```

## 🧪 Example Requests

### Using cURL

**GET all recipes:**
```bash
curl http://localhost:3000/recipes
```

**POST a new recipe:**
```bash
curl -X POST http://localhost:3000/recipes \
  -H "Content-Type: application/json" \
  -d '{"recipeName": "Grilled Cheese Sandwich", "ingredients": ["bread", "butter", "cheese"], "directions": "Butter bread, place in pan, put cheese between slices and melt}'
```

**GET a specific recipe:**
```bash
curl http://localhost:3000/recipes/666d2d6b-6324-400c-9eb5-2d193306c94c
```

**DELETE a cat:**
```bash
curl -X DELETE http://localhost:3000/recipes/550e8400-e29b-41d4-a716-446655440000
```

### Using Postman

1. **GET Request:**
   - Method: `GET`
   - URL: `http://localhost:3000/recipes`
   - Headers: None required

2. **POST Request:**
   - Method: `POST`
   - URL: `http://localhost:3000/recipes`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
        "recipeName": "Garlic Mushroom Pasta",
        "ingredients": ["pasta", "mushrooms", "olive oil", "garlic", "parsley"],
        "directions": "Saute mushrooms with garlic, toss with pasta and parsley"     }
     ```

3. **GET by ID:**
   - Method: `GET`
   - URL: `http://localhost:3000/recipe/:id`
   - Replace `:id` with an actual ID from your collection

4. **DELETE:**
   - Method: `DELETE`
   - URL: `http://localhost:3000/recipe/:id`
   - Replace `:id` with an actual ID from your collection

## ⚠️ Error Responses

All error responses follow a consistent format:

**400 Bad Request** (Invalid input):
```json
{
  "error": "No recipe name in request"
}
```

**404 Not Found** (Resource doesn't exist):
```json
{
  "error": "Recipe not found"
}
```

## 📁 Project Structure

```
.
├── src/
│   ├── index.js          # Express app setup
│   └── data.js         # In-memory data array
├── public/
│   └──recipebookcover.png
├── package.json
├── README.md
└── .gitignore
```

## 🎯 Features

- ✅ CRUD operations (Create, Read, Update/Delete)
- ✅ In-memory data storage
- ✅ Unique ID generation using `crypto.randomUUID()`
- ✅ Consistent error handling
- ✅ Proper HTTP status codes
- ✅ JSON request/response format
- ✅ Input validation

## 📝 Notes

- Data is stored in memory and will be lost when the server restarts
- This is a learning project demonstrating Express fundamentals
- In production, you would use a database (like PostgreSQL) for persistent storage

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📄 License

This project is for educational purposes.

---

**Built as part of Week 1 Server Lessons**

## Assignee : TyQuincia R. Oby


