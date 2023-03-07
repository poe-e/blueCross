import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import '../css/recipePage.css'
import NavBar from "./NavBar";
import HealthItems from "./HealthItems";
import IngredientsList from "./IngredientsList";

function DetailRecipe(){

    const params = useParams();
    
    const { data, error } = useFetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=3050390b4d5b4dcb86d047234f436b0f`);

    return(
        <>
            { error && <p>Something went wrong, maybe try refreshing?</p>}
            <NavBar></NavBar>
            { data && 
                <div >
                    <div className="recipeCard">
                        <h2>{data.title}</h2>
                        <img className="recipeImage" src={data.image} alt=""/>
                        {/* this opens the site up to cross site scripting, if I had more time I'd parse the summary and print it myself */}
                        {/* <div className="dietHeaders"> */}
                            <HealthItems 
                                diets={data.diets}
                                healthScore={data.healthScore}
                                pricePer={data.pricePerServing}
                                readyIn={data.readyInMinutes}
                                servings={data.servings}
                            />
                        <div dangerouslySetInnerHTML={{ __html: data.summary }} /> 
                        <div>
                            <IngredientsList 
                                ingredients={data.extendedIngredients}
                                instructions={data.analyzedInstructions}
                            />
                        </div>
                    </div>
                </div>
            }


        </>
        
    )
}

export default DetailRecipe;