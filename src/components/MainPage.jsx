import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import RecipeList from "./RecipeList";

function MainPage(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    // const searchQuery = location.search;
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if(searchQuery && window.performance.navigate. === 1){
    //         navigate('/', { state: { searchQuery: ''}});
    //     }
    // });

    return(
        <>
            <NavBar></NavBar>
            <RecipeList searchQuery={searchQuery}></RecipeList>
        </>
        

    );
}


export default MainPage;