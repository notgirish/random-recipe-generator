import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import InstructionsText from '../Todo/InstructionsText'

export default function RecipeContent() {

    let [recipeInfo, setRecipeInfo] = useState({})
    let [instructionsArray, setInstructionsArray] = useState([])

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            let parsedData = await response.json()
            setRecipeInfo(parsedData.meals[0])
            setInstructionsArray(parsedData.meals[0].strInstructions.split(". "))
            console.log('bye')
        }
        fetchData();
    }, [])


    function splitaAndPrint() {
        return instructionsArray.map((element, index) => <InstructionsText key={index} textArray={element} />)
    }

    return (
        <section className='recipe'>
            <div className='container'>

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

                <ul>
                    {splitaAndPrint(recipeInfo.strInstructions)}
                </ul>
                {/* https://free3dicon.com/
https://icons8.com/illustrations/style--3d-fluency */}

                <p>{recipeInfo.strYoutube}</p>
                <p>{recipeInfo.strSource}</p>
                <button><Link to="/todo">Next Random Recipe</Link></button>
            </div>
        </section>
    )
}
