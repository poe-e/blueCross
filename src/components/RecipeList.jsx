import Pagnation from "./Pagnation";
import React, { useState, useEffect } from 'react';
import RecipePost from "./RecipePost";
import useFetch from "../hooks/useFetch";
import FilterMenu from "./FilterMenu";

function RecipeList({searchQuery}){


    const [filterValue, setFilterValue] = useState([]);
    const [url, setUrl] = useState('https://api.spoonacular.com/recipes/complexSearch?apiKey=a864ae16bae64927bb9649b8e9a21180')

    const handleFilterChange  = (value, checked) => {
        setFilterValue(prevFilterValue => {
            if(checked){
                return [...prevFilterValue, value];
            }
            else{
                return prevFilterValue.filter(item => item !== value);
            }
        });
    }

    useEffect(() => {
        let newUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=a864ae16bae64927bb9649b8e9a21180';
        if(searchQuery){
            newUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=a864ae16bae64927bb9649b8e9a21180&query=${searchQuery}&limit=50`;
        }
        if(filterValue){
            newUrl += `&cuisine=${filterValue.join(',')}`;
        }
        setUrl(newUrl);
    }, [searchQuery, filterValue]);

    const { data, error } = useFetch(url);
    // console.log(searchQuery, filterValue, data);


    if(error) return error && <p style={{paddingLeft: '2%'}}>Something went wrong, may try refreshing?</p>

    return(
        <>
            <Pagnation/>
            <FilterMenu onFilterChange={handleFilterChange}/>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <ul>
                {data && data.results.map((recipe) => {
                            return (
                                <RecipePost
                                key={recipe.id}
                                id={recipe.id}
                                title={recipe.title}
                                image={recipe.image}
                                />
                            );
                    })
                }
                </ul>
            </div>

        </>
    );
}


export default RecipeList;