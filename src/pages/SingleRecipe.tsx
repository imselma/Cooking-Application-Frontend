import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SingleRecipe = () => {

    const [recipeData, setRecipeData] = useState([])
    const [id, seId] = useState(localStorage.getItem('recipeID'))
    const [steps, setSteps] = useState([])
    const navigate = useNavigate()
    const userToken = localStorage.getItem('userToken')

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:2804/api/recipes/${id}`).then(res => {
                console.log(res.data);
                setRecipeData(res.data);
                setSteps(res.data.steps.split(". "));
            }).catch(error => {
                console.error('Error fetching recipe data:', error);
            });
        }
    }, [id])


    const handleDelete = () => {
        if (id) {
            axios.delete(`http://localhost:2804/api/recipes/${id}`).then(res => {
                console.log(res.data);
                navigate("/recipes")
            }).catch(error => {
                console.error('Error fetching recipe data:', error);
            });
        }

    }

    console.log(steps)


    return (
        <>
            <div className='recipeBody'>
                <div className='header' style={{ display: 'flex' }}>
                    <div className='title' style={{ marginTop: '40px', marginLeft: '100px' }}>
                        <h1>{recipeData.name}</h1>
                        <div className="card" style={{ width: '425px', marginTop: '20px' }}>
                            <div className="list-group list-group-flush" style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#976B7A', padding: '2px', height: '60px' }}>
                                <div className='first'>
                                    <p style={{ marginRight: '5px', marginLeft: '20px', color: 'white' }}>COOKING TIME:</p>
                                    <h6 style={{ marginRight: '5px', marginLeft: '55px', color: 'white', marginTop: '-10px' }}>{recipeData.cookingTime} min</h6>
                                </div>
                                <div className='second'>
                                    <p style={{ marginRight: '10px', marginLeft: '50px', color: 'white' }}>TRAIT:</p>
                                    <h6 style={{ marginRight: '20px', marginLeft: '47px', marginTop: '-10px', color: 'white' }}>{recipeData.restriction}</h6>
                                </div>
                                <div className='third'>
                                    <p style={{ marginLeft: '50px', color: 'white' }}>CREATOR:</p>
                                    <div style={{display: 'flex'}}>
                                    <h6 style={{ marginLeft: '25px', color: 'white', marginTop: '-10px' }}>{recipeData.userName} </h6>
                                    <h6 style={{ marginLeft: '10px', color: 'white', marginTop: '-10px' }}>{recipeData.surname} </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '400px', height: '150px', border: 'none', marginLeft: 'auto', marginRight: '150px', marginTop: '100px', display: 'flex', flexDirection: 'column' }}>

                        <div className="card-body" style={{ backgroundColor: '#976B7A', borderRadius: '10px' }}>
                            <p className="card-text" style={{ color: 'white', textAlign: 'justify', padding: '10px' }}>{recipeData.description}</p>
                        </div>
                    </div>
                </div>
                <div className='ingredientsAndSteps' style={{ marginTop: '-55px' }}>
                    <div className='Ingredients' style={{ marginLeft: '100px', marginTop: '-40px' }}>
                        <h4 style={{ fontWeight: 'bold' }}>Ingredients:</h4>
                        {Array.isArray(recipeData.ingredients) && recipeData.ingredients.map((ingredient, i) => (
                            <ul key={i}>
                                <li style={{ color: '#976B7A' }}>
                                    <span style={{ color: 'black' }}>{ingredient.name}</span>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className='cookingSteps' style={{ marginLeft: '100px', marginTop: '30px' }}>
                        <h4 style={{ fontWeight: 'bold' }}>Cooking steps:</h4>
                        {steps.map((step, i) => (
                            <ol type='1' style={{ position: 'relative' }} key={i} start={i + 1}>
                                <li style={{ marginTop: '10px' }}>
                                    <span style={{ marginLeft: '10px' }}>{step}</span>
                                </li>
                            </ol>
                        ))}
                    </div>
                </div>
                {userToken ? (
                    <div className='buttons' style={{ display: 'flex', gap: '15px', marginTop: '50px', marginBottom: '20px', marginLeft: '100px' }}>
                        <button type="button" className="btn" style={{ backgroundColor: '#976B7A', color: 'white', width: '125px', height: '45px', fontSize: '20px', fontWeight: 'bold' }}>Edit</button>
                        <button type="button" className="btn" style={{ backgroundColor: 'white', border: '2px solid #976B7A', color: '#976B7A', width: '125px', height: '45px', fontSize: '20px', fontWeight: 'bold' }} onClick={handleDelete}>Delete</button>
                    </div>
                ) : (
                    <div style={{ marginTop: '50px', marginLeft: '100px' }}>
                        <h5>Become a user and share your delicious recipes with rest of community!</h5>
                    </div>
                )}
            </div>
        </>
    )
}

export default SingleRecipe