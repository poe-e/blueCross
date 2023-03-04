import SearchInput from "./SearchInput";
import "../css/navbar.css";

function NavBar(){
    return(
        <div>
            <div className="navbarWrapper">
                <h1>Spoonacular Recipes</h1>
                <SearchInput />
            </div>
        </div>
    )
}

export default NavBar;