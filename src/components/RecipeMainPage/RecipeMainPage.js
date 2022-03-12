import React from 'react'

export default function RecipeMainPage() {
    return (
        <section className='hero'>
            <div className='container'>
                <h1>Generate Random Recipes</h1>
                <p>Get new recipes to make something special to the people that make you feel special (＾－＾)</p>
                <button>Generate Recipe<i class="fa fa-solid fa-carrot"></i></button>
                <figure>
                    <img src={require('../../assets/burger.png')} alt='burger' />
                </figure>
            </div>
        </section>
    )
}
