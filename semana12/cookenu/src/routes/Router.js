import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage"




const Router = () => {

return (

<BrowserRouter>
<Switch>
    <Route>
        <LoginPage/>
    </Route>
    <Route>
        <AddRecipePage/>
    </Route>
    <Route>
        <RecipeDetailPage/>
    </Route>
    <Route>
        <SignUpPage/>
    </Route>
    <Route>
        <RecipeListPage/>
    </Route>
    <Route>
        <ErrorPage/>
    </Route>
    
</Switch>
</BrowserRouter>


)



}



export default Router