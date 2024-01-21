import { useState, useEffect } from "react"
import axios from "axios"
import CreateIngredientModal from "../CreateIngredientModal"

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
    top: "-60px",
    right: "30%",
    zIndex: 1
}

const CreateRecipeModal = ({ closeModal }) => {
    const [recipeData, setRecipeData] = useState({
        name: "",
        description: "",
        steps: "",
        ingredients: [],
        cookingTime: 0,
        restriciton: "",
        userId: localStorage.getItem('userID')
    });
 
    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState([])
    const [submodal, setSubmodal] = useState(false)
    const [email, setEmail] = useState(localStorage.getItem('userEmail'))
    const [userId, setUserId] = useState(localStorage.getItem("userID"))
    
    useEffect(() => {
        axios.get("http://localhost:2804/api/users/byemail", { params: {email} }).then(res1 => {
            console.log(res1.data)
        })
    }, [])
 
 
    const handleCreation = () => {
        const ingredientNames = []
 
        for(const ingredient of ingredients) {
            ingredientNames.push(ingredient.name.toLowerCase())
        }
 
        const _newIngredients = recipeData.ingredients.filter(item => ingredientNames.includes(item.toLowerCase()) == false)
        console.log(recipeData)
        console.log(_newIngredients)
 
        if(newIngredients.length == 0) {
            console.log(recipeData)
            axios.post("http://localhost:2804/api/recipes/addRecipe",
             {...recipeData, userId: userId}
             ).then(res => {
                console.log(res.data)
            })
        }
        setNewIngredients(_newIngredients)
    }

    
    useEffect(() => {
        axios.get("http://localhost:2804/api/ingredients/").then(res => {
            setIngredients(res.data)
            console.log(res.data)
        })
    }, [])

    useEffect(() => {
        if(newIngredients.length > 0) {
            setSubmodal(true)
        }
    }, [newIngredients])

    return (
        <>
        {submodal && <CreateIngredientModal recipeData={recipeData} newIngredients={newIngredients} closeSubmodal={setSubmodal} />}
        <div className="modalBackground">
            <div className="modal-content" style={modalStyle}>
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ marginLeft: '50px', marginTop: '20px', fontWeight: 'bold'}}>Create Recipe</h1>
                </div>
                <div className="modal-body" style={{ marginLeft: '50px', marginTop: '40px' }}>
                    <form style={{width: '500px', marginTop: '-10px', marginRight: '50px'}}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setRecipeData({...recipeData, name: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <textarea className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setRecipeData({...recipeData, description: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Steps:</label>
                            <textarea className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setRecipeData({...recipeData, steps: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ingredients:</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setRecipeData({...recipeData, ingredients: (e.target.value).split(", ")})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cooking time:</label>
                            <input type="number" min={0} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setRecipeData({...recipeData, cookingTime: Number(e.target.value)})} />
                        </div>
                        <label className="form-label">Trait:</label>
                        <select value={1} onChange={(e) => setRecipeData({...recipeData, restriciton: e.target.value})} className="form-select" style={{marginBottom: 16}} aria-label="Default select example">
                            <option value="1">Select a Trait</option>
                            <option value="HALAL">Halal</option>
                            <option value="GLUTEN_FREE">Gluten Free</option>
                            <option value="VEGAN">Vegan</option>
                            <option value="VEGETARIAN">Vegetarian</option>
                            <option value="LACTOSE_FREE">Lactose Free</option>
                        </select>
                    </form>
                </div>
                <div className="modal-footer" style={{ marginRight: '45px', marginBottom: '25px' }}>
                    <button type="button" className="btn"
                        onClick={handleCreation}
                        style={{
                            backgroundColor: '#976B7A',
                            color: 'white',
                            width: '120px',
                            height: '45px',
                            fontSize: '20px',
                            marginRight: '10px'
                        }}> Create </button>
                    <button type="button" className="btn"
                        style={{
                            backgroundColor: 'white',
                            border: '2px solid #976B7A',
                            color: '#976B7A',
                            width: '120px',
                            height: '45px',
                            fontSize: '20px'
                        }} onClick={() => closeModal(false)}> Cancle </button>
                </div>
            </div>
        </div>
        <div className="back" 
            style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "white", opacity: 0.5, zIndex: 0, top: 0}}></div>
        </>
    )
}

export default CreateRecipeModal