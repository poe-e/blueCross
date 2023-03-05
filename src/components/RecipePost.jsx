import { useNavigate } from 'react-router-dom';

function RecipePost({ id, title, image }){

    const navigate = useNavigate();

    function handleClick(recipeID){
        navigate(`/recipeDetails/${recipeID}`);
    }

    return(
        <li className="recipeListItem" onClick={()=>handleClick(id)}>
            <div className="recipe">
                <h2>{title}</h2>
                <div className="imageWrapper">
                    <img 
                        className="foodImage"
                        src={image}
                        alt="food"
                    />
                </div>
            </div>
        </li>
    )
}


export default RecipePost;