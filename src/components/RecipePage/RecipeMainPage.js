import React, { useState } from 'react'
import RecipeContent from './RecipeContent';

export default function RecipeMainPage() {

    let [loadContent, setLoadContent] = useState(false)

    function launchRecipeGen() {
        {
            document.querySelectorAll('.hideOnClick')[0].style.display = 'none'
            document.querySelectorAll('.hideOnClick')[1].style.display = 'none'
            setLoadContent(true)
        }
    }

    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className="hero-content">
                        <h1>Generate Random Recipes</h1>
                        <p>Get new recipes to make something special to the people that make you feel special (＾－＾)</p>
                        <button><a href="#clickLaunch">Generate Recipe</a><i className="fa fa-solid fa-carrot"></i></button>
                    </div>
                    <img src={require('../../assets/burger.png')} alt='burger' />
                </div>
            </section>

            <section className='recipe-preview'>
                <div className='container'>
                    <h2 className='hideOnClick'>Generate Special Recipes</h2>
                    <button id="clickLaunch" className='hideOnClick' onClick={launchRecipeGen}>Launch!</button>
                    {loadContent && <RecipeContent />}
                </div>
            </section>
        </>
    )
}
