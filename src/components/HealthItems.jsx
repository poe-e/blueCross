

function HealthItems({diets, healthScore, pricePer, readyIn, servings}){

    return(
        <>
            <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                <ul style={{padding:"2vh 0 1vh 2vh", listStyleType:"circle"}}>
                    {diets.map((diet) =>(
                        <li key={diet}>{diet.charAt(0).toUpperCase() + diet.slice(1)}</li>
                    ))}
                </ul>
                <ul style={{padding:"2vh 0 1vh 3vh", listStyleType:"circle"}}>
                    <li>Health Score: {healthScore}</li>
                    <li>Price Per Serving: {pricePer}</li>
                    <li>Ready In: {readyIn}</li>
                    <li>Serving Size: {servings}</li>
                </ul>
            </div>
        </>
    )
}


export default HealthItems;