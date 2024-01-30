import axios from "axios";
import { useQuery } from "react-query";

const useRecipes = () => {
    return useQuery('recipes',
    () => axios.get("https://cooking-app-backend.onrender.com/api/recipes/").then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        }));
}

export default useRecipes;