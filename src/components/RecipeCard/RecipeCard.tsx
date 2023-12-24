
import { useNavigate } from "react-router-dom";
import { Recipe } from "../../utils/types"

type Props = {
    recipe: Recipe
}

const RecipeCard = ({ recipe }: Props) => {
    const navigate = useNavigate();

    const navigateToRecipePage = () => {
        navigate(`/recipePage/${recipe.name}`);
    }
    return (
        <div className="col-12 col-md-3 m-3">
           <div className="card">
               <div className="card-header">Creation Date: {recipe.creationDate}</div>
               <div className="card-body">
                   <h5 className="card-title">{recipe.name}</h5>
                   <h6 className="card-subtitle">Creator: {recipe.user}</h6>
                   <p className="card-text">{recipe.description}</p>
                   <a className="btn btn-primary" onClick={navigateToRecipePage}>View</a>
               </div>
            </div>
        </div>

    )
};

export default RecipeCard