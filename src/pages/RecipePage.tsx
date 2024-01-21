import React from 'react'
import { recipeList } from '../constants'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
    const { name } = useParams();
    console.log(name);
    const recipe = recipeList.find((r) => r.name === name);

    if(!recipe){
        return(<p>The recipe doesn't exist.</p>)
    }

  return (
    <div className='container d-flex justify-content-center align-items-center'>
            <div className='col-12 col-md-9 m-5'>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title"  style={{ color: 'blue' }}>{ recipe.name }</h2>
                        <p className="card-text"><b>{ recipe.description }</b></p>
                        <p className='card-text'> Created by: { recipe.user }</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RecipePage