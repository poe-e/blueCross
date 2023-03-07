import Pagination from "./Pagination";
import React, { useState, useEffect } from 'react';
import RecipePost from "./RecipePost";
import useFetch from "../hooks/useFetch";
import FilterMenu from "./FilterMenu";

function RecipeList({searchQuery}){

    const [curPage, setCurPage] = useState(1);
    const [currentPaginationData, setCurrentPaginationData] = useState([]);
    const [filterValue, setFilterValue] = useState([]);
    const [url, setUrl] = useState('https://api.spoonacular.com/recipes/complexSearch?apiKey=3050390b4d5b4dcb86d047234f436b0f&number=50')
    
    const curPageSize = 5;

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
    const updatePage = (pageNum) => {
        if(pageNum !== 0) setCurPage(pageNum);
    }

    useEffect(() => {
        let newUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=3050390b4d5b4dcb86d047234f436b0f&number=50';
        if(searchQuery){
            newUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=3050390b4d5b4dcb86d047234f436b0f&query=${searchQuery}&number=50`;
        }
        if(filterValue){
            newUrl += `&cuisine=${filterValue.join(',')}`;
        }
        setUrl(newUrl);
    }, [searchQuery, filterValue]);

    const { data, error } = useFetch(url);

    useEffect(() => {
        if(data && data.results){
            setCurrentPaginationData(...[data.results.slice(curPageSize*(curPage-1), curPageSize*curPage)]);
        }
    },[curPage, data]);


    if(error) return error && <p style={{paddingLeft: '2%'}}>Something went wrong, may try refreshing?</p>

    return(
        <>
            <FilterMenu onFilterChange={handleFilterChange}/>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width:"98vw"}}>
                {/* <ul style={{listStyleType:"none;", padding:"0;"}}> */}
                <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-evenly"}}>
                {currentPaginationData && currentPaginationData.map((recipe) => {
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
                </div>

                {/* </ul> */}
            </div>
            {data && (
                <Pagination 
                    currentPage={curPage}
                    totalCount={data.results.length}
                    pageSize={curPageSize}
                    onPageChange={updatePage}
                />
                )}

        </>
    );
}


export default RecipeList;