import SearchInput from "./SearchInput";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";

function NavBar(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
        <div>
            <div className="navbarWrapper">
                <h1 className="heading" onClick={handleClick}>Spoonacular Recipes</h1>
                <SearchInput />
            </div>
        </div>
    )
}

export default NavBar;