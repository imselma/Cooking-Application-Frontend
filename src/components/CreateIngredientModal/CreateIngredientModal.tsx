import axios from 'axios'
import React, { useEffect, useState } from 'react'

const modalStyle = {
    width: '600px',
    height: '600px',
    overflowY: "scroll",
    border: '2px solid gray',
    borderRadius: '20px',
    margin: 'auto',
    marginTop: '100px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    position: "absolute",
    top: "-40px",
    right: "30%",
    zIndex: 10
}

const CreateIngredientModal = ({closeSubmodal, newIngredients, recipeData}) => {

    const [ingredientData, setIngredientData] = useState({
        name: "",
        category: " ",
        measurementUnit: " "
    })

    const [ingrObjects, setIngrObjects] = useState([])


    useEffect(() => {
        const _ingrObjects = []
        for(const newIngredient of newIngredients) {
            _ingrObjects.push({...ingredientData, name: newIngredient})
        }
        setIngrObjects(_ingrObjects)
    }, [])

    console.log("objekti")
    console.log(ingrObjects)
    const sendRequest = () => {
        const _ingrObjects = []
        for(const ingrObj of ingrObjects) {
            axios.post("http://localhost:2804/api/ingredients/addIngredient", ingrObj).then(res => {
                axios.post("http://localhost:2804/api/recipes/addRecipe", recipeData).then(res1 => {
                    console.log(res1.data)
                })
            })
        }

    }

  return (
    <>
        <div className="modalBackground">
            <div className="modal-content" style={modalStyle}>
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ marginLeft: '50px', marginTop: '20px', fontWeight: 'bold'}}>Add Ingredient: </h1>
                </div>
                <div className="modal-body" style={{ marginLeft: '50px', marginTop: '40px' }}>
                    <form style={{width: '500px', marginTop: '-10px', marginRight: '50px'}}>
                        {
                            newIngredients.map((item, index) => {
                                return(
                                    <>
                                        <div key={index} className="mb-3">
                                            <label className="form-label">Name:</label>
                                            <input onChange={(e) => {ingrObjects[index].name = e.target.value}} value={item} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div key={index + 1} className="mb-3">
                                            <label className="form-label">Category:</label>
                                            <input onChange={(e) => {ingrObjects[index].category = e.target.value}} type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div key={index + 2} className="mb-3">
                                            <label className="form-label">Measurement unit:</label>
                                            <input onChange={(e) => {ingrObjects[index].measurementUnit = e.target.value}} type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </form>
                </div>
                <div className="modal-footer" style={{ marginRight: '45px', marginBottom: '25px' }}>
                    <button type="button" className="btn"
                        onClick={() => {
                            recipeData.ingredients = [...recipeData.ingredients, ...ingrObjects]
                            sendRequest()
                        }}
                        style={{
                            backgroundColor: '#976B7A',
                            color: 'white',
                            width: '120px',
                            height: '45px',
                            fontSize: '20px',
                            marginRight: '10px'
                        }}> Create </button>
                    <button type="button" className="btn"
                        onClick={() => closeSubmodal(false)}
                        style={{
                            backgroundColor: 'white',
                            border: '2px solid #976B7A',
                            color: '#976B7A',
                            width: '120px',
                            height: '45px',
                            fontSize: '20px'
                        }}> Cancle </button>
                </div>
            </div>
        </div>
        <div className="back" 
            style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "white", opacity: 0.5, zIndex:5, top: 0}}></div>
        </>
  )
}

export default CreateIngredientModal