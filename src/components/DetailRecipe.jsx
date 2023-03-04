import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import '../css/recipePage.css'

function DetailRecipe(){

    const params = useParams();
    
    const { data, error } = useFetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=d2d83e91f8e940628f5d62a3041fa480`);

    useEffect(()=>{
        console.log(data);
    })

    return(
        <>
            { error && <p>Something went wrong, maybe try refreshing?</p>}
            { data && 
                <div >
                    <div className="recipeCard">
                        <h2 style={{textAlign:"left"}}>{data.title}</h2>
                        <img className="recipeImage" src={data.image} alt=""/>
                        {/* this opens the site up to cross site scripting, if I had more time I'd parse the summary and print it myself */}
                        <div dangerouslySetInnerHTML={{ __html: data.summary }} /> 
                    </div>
                </div>
            }


        </>
        
    )
}

export default DetailRecipe;