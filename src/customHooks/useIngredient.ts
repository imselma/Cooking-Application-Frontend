import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../constants";

const useIngredients = () => {
    return useQuery('recipes',
    () => axios.get( BASE_URL + "/ingredients/").then(
        (response) => {
            const data = response.data;
            return data;
        }));
}

export default useIngredients;