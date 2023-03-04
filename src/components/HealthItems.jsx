

function HealthItems({diets, healthScore, pricePer, readyIn, servings}){

    return(
        <>
            <div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>
                <ul>
                    {diets.map((diet) =>(
                        <li key={diet}>{diet.charAt(0).toUpperCase() + diet.slice(1)}</li>
                    ))}
                </ul>
                <ul>
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