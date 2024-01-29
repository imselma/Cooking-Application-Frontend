import { useState, useEffect } from 'react'
import RecipeCard from '../RecipeCard'
import SearchBar from '../SearchBar'
import axios from 'axios'
import CreateRecipeModal from '../CreateRecipeModal'



const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const userToken = localStorage.getItem('userToken')

    useEffect(() => {
        axios.get("http://localhost:2804/api/recipes/").then(res => {
            console.log(res.data)
            setRecipes(res.data)
            setSearchResult(res.data)
        })
    }, [])


    const handleChange = (value: string) => {
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase()))
        console.log(filteredRecipes);
        setSearchResult(filteredRecipes)
    }
    return (
        <>
            <div className='search-and-button' style={{ display: 'flex' }}>
                <SearchBar onSearch={handleChange} />
                {userToken && (
                    <button
                        type="button"
                        className="btn"
                        style={{
                            backgroundColor: '#976B7A',
                            color: 'white',
                            width: '180px',
                            height: '50px',
                            fontSize: '20px',
                            marginTop: '15px',
                            marginLeft: 'auto',
                            marginRight: '60px'
                        }}
                        onClick={() => setOpenModal(true)}
                    >
                        Create Recipe +
                    </button>
                )}
            </div>
            <div className='row' style={{ marginTop: '70px', marginLeft: '15px' }}>
                {
                    searchResult.map((recipe, i) => (
                        <RecipeCard recipe={recipe} key={i} />
                    ))
                }
            </div>
            {openModal && <CreateRecipeModal closeModal={setOpenModal} />}
        </>
    )
}

export default RecipeList;