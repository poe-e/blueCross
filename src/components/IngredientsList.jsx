import "../css/recipePage.css"

function IngredientsList({ ingredients, instructions }){

    return(
        <div style={{display:"flex", flexDirection:"column", paddingTop:"5px"}}>
            {ingredients.map((ingredient) => {
                let name = ingredient.original;
                if(name && name[0].match(/[a-z]/i)){
                    name = name[0].toUpperCase() + name.slice(1);
                }
                return(
                        <div key={ingredient.name} className="ingredientWrapper">
                            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt=""/>
                            <div>{name} </div>
                        </div>

                )
            })}
            <div style={{marginBottom:"50%"}}>
                <h2>Instructions</h2>
                {instructions[0].steps.map((step) => (
                    <div key={step.number}>
                        <b>Step {step.number}</b>: {step.step}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IngredientsList;