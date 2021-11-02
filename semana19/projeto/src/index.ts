import app from "./app"
import createRecipe from "./endpoints/recipe/createRecipe"
import getRecipeById from "./endpoints/recipe/getRecipeById"
import signup from "./endpoints/signup"
import getProfile from "./endpoints/users/getProfile"
import getUserById from "./endpoints/users/getUserById"
import login from "./endpoints/users/login"


app.get("/users/signup", signup)
app.get("/users/login", login)
app.get("/users/profile", getProfile)
app.get("/users/:id/profile", getUserById)

app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)
