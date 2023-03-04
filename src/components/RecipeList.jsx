import Pagnation from "./Pagnation";
import React, { useState, useEffect } from 'react';
import RecipePost from "./RecipePost";
import useFetch from "../hooks/useFetch";

function RecipeList({searchQuery}){

    // const [curPage, setCurPage] = useState(1);
    // const [curPageSize, setCurPageSize] = useState(5);
    // const [currentPageData, setCurrentPageData] = useState(null);
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    // const [data, setData] = useState(null);

    let url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b04c3f5a80ab4b0288f03fe99ac7dd36';
    if(searchQuery){
        console.log('update url')
        url = `https://api.spoonacular.com/food/search?apiKey=b04c3f5a80ab4b0288f03fe99ac7dd36&query=${searchQuery}&limit=50`
    }
    const { data, error } = useFetch(url);


    // if(loading) return <p>Loading...</p>
    if(error) return error && <p style={{paddingLeft: '2%'}}>Something went wrong, may try refreshing?</p>

    return(
        <>
            <Pagnation/>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <ul>
                {data &&
                    (data.searchResults
                    ? data.searchResults[0].results.map((recipe) => {
                            return (
                                <RecipePost
                                key={recipe.id}
                                id={recipe.id}
                                title={recipe.name}
                                image={recipe.image}
                                />
                            );
                        })
                    : data.results.map((recipe) => {
                            return (
                                <RecipePost
                                key={recipe.id}
                                id={recipe.id}
                                title={recipe.title}
                                image={recipe.image}
                                />
                            );
                    })
                    )
                }
                </ul>
            </div>

        </>
    );
}


export default RecipeList;