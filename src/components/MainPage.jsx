import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import RecipeList from "./RecipeList";

function MainPage(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    return(
        <>
            <NavBar></NavBar>
            <RecipeList searchQuery={searchQuery}></RecipeList>
        </>
        

    );
}


export default MainPage;