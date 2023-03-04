import { useNavigate } from "react-router-dom";
import "../css/navbar.css"

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
            </form> 

        </div>
    );
}


export default SearchInput;