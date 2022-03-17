import React, { useEffect, useState } from 'react'
import InstructionsText from '../Todo/InstructionsText'

export default function RecipeContent() {

    let [recipeInfo, setRecipeInfo] = useState({})
    let [instructionsArray, setInstructionsArray] = useState([])

    async function fetchData() {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        let parsedData = await response.json()
        setRecipeInfo(parsedData.meals[0])
        setInstructionsArray(parsedData.meals[0].strInstructions.split(". "))
    }

    useEffect(() => {
        fetchData();
    }, [])


    function splitaAndPrint() {
        return instructionsArray.map((element, index) => <InstructionsText key={index} textArray={element} />)
    }


    return (
        <section className='recipe'>
            <div className='container'>

                {/* if the recipe data hasn't loaded then show a spinner else display content*/}
                {!Object.keys(recipeInfo).length ? <div className="lds-hourglass"></div> :
                    <>
                        <div className="except-instructions">
                            <figure><img src={recipeInfo.strMealThumb} className="food-image" alt='recipe proof XD' /></figure>
                            <h2>{recipeInfo.strMeal}</h2>
                            <div className='category info-holder'>
                                <i className="fa fa-solid fa-utensils fa-xl"></i>
                                <span>Category:&nbsp;</span>
                                <strong>{recipeInfo.strCategory}</strong>
                            </div>
                            <div className='country info-holder'>
                                <i className="fa fa-solid fa-earth-americas fa-xl"></i>
                                <span>Origin:&nbsp;</span>
                                <strong>{recipeInfo.strArea}</strong>
                            </div>
                            <div className='youtube-link info-holder'>
                                <i className="fa fa-brands fa-youtube fa-xl"></i>
                                <span>YouTube:&nbsp;</span>
                                <strong><a href={recipeInfo.strYoutube} target="_blank" rel="noreferrer">Watch</a></strong>
                            </div>
                            <button className='randomGenBtn' onClick={fetchData}>Next Random Recipe</button>
                        </div>

                        <ul className='instructions-list'>
                            {splitaAndPrint(recipeInfo.strInstructions)}
                        </ul>
                    </>}
            </div>
        </section>
    )
}
