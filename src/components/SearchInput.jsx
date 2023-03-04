import "../css/navbar.css"

function SearchInput(){
    return(
        <div style={{display:"flex", alignItems: "center" }}> 
            <input className="input" placeholder="Search..."></input>
        </div>
    );
}


export default SearchInput;