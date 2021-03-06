import React from "react";
import { Switch, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"




const Router = ({setRightButtonText}) => {

return (


<Switch>
    <Route exact path="/login">
        <LoginPage setRightButtonText={setRightButtonText}/>
    </Route>
    <Route exact path="/adicionar-receita">
        <AddRecipePage/>
    </Route>
    <Route exact path="/detalhe/:id">
        <RecipeDetailPage/>
    </Route>
    <Route exact path="/cadastro">
        <SignUpPage setRightButtonText={setRightButtonText}/>
    </Route>
    <Route exact path="/">
        <RecipeListPage/>
    </Route>
    <Route >
        <ErrorPage/>
    </Route>
    
</Switch>



)



}



export default Router