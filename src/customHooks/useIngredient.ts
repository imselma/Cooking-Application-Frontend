import axios from "axios";
import { useQuery } from "react-query";

const useIngredients = () => {
    return useQuery('recipes',
    () => axios.get("https://dashboard.render.com/api/ingredients/").then(
        (response) => {
            const data = response.data;
            return data;
        }));
}

export default useIngredients;