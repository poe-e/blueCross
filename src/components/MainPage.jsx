import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import RecipeList from "./RecipeList";

function MainPage(){

    const location = useLocation();
    const searchQuery = location.state?.searchQuery;
    const navigate = useNavigate();

    useEffect(()=>{
        if(searchQuery){
            navigate('/', { state: { searchQuery: ''}});
        }
    });

    return(
        <>
            <NavBar></NavBar>
            <RecipeList searchQuery={searchQuery}></RecipeList>
        </>
        

    );
}


export default MainPage;