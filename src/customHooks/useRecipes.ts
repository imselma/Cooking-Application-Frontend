import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../constants";

const useRecipes = () => {
    return useQuery('recipes',
    () => axios.get(BASE_URL + "/recipes/").then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        }));
}

export default useRecipes;