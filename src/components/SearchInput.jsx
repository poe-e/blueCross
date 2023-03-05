import { useNavigate } from "react-router-dom";
import "../css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function SearchInput(){

    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value;
        console.log(searchQuery);
        // navigate('/', { state: {searchQuery}});
        navigate(`/?search=${searchQuery}`);
    }


    return(
        <div style={{display:"flex", alignItems: "center" }}>
            <form onSubmit={handleSearch}>
                <input name="search" className="search-input" placeholder="Search..."></input>
                <button className="search-button" type="submit">
                <FontAwesomeIcon icon={faSearch} style={{color:"white", cursor:"pointer", fontSize:"3vh"}}/>
                </button>
            </form> 
        </div>
    );
}


export default SearchInput;