import axios from "axios";
import { useQuery } from "react-query";

const useIngredients = () => {
    return useQuery('recipes',
    () => axios.get("https://cooking-app-backend.onrender.com/api/ingredients/").then(
        (response) => {
            const data = response.data;
            return data;
        }));
}

export default useIngredients;