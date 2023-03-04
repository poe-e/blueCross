import Pagnation from "./Pagnation";
import React, { useState, useEffect } from "react";
import RecipePost from "./RecipePost";
import useFetch from "../hooks/useFetch";

function RecipeList(){

    const [curPage, setCurPage] = useState(1);
    const [curPageSize, setCurPageSize] = useState(5);
    const [currentPageData, setCurrentPageData] = useState(null);

    const { data, error } = useFetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d2d83e91f8e940628f5d62a3041fa480');


    return(
        <>
            {error && <p style={{paddingLeft: '2%'}}>Something went wrong, may try refreshing?</p>}
            <Pagnation/>
            <ul>
            { data && data.results.map(recipe => {
                    return <RecipePost 
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                    />
            })}
            </ul>
        </>
    );
}


export default RecipeList;