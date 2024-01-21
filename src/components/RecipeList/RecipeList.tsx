import { ChangeEvent, useState } from 'react'
import { recipeList } from '../../constants'
import RecipeCard from '../RecipeCard'


const RecipeList = () => {
  const [recipes, setRecipes] = useState(recipeList)

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredRecipes = recipeList.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setRecipes(filteredRecipes)
  }

  return (
    <>
      <form className="d-flex" role="search">
        <input className="col-12 col-md-4 mx-3" type="search" placeholder="Search" aria-label="Search" onChange={search} />
          <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <div className='row'>
        {
          recipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i}/>
          ))
        }
      </div>
    </>
  )
}

export default RecipeList