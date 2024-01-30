/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query"
import { Ingredient } from "../utils/types";
import axios from "axios";
import { BASE_URL } from "../constants";


const useCreateIngredient = () => {
    const queryClient = useQueryClient();
    return useMutation((ingredientData: Ingredient) => 
    axios.post(BASE_URL + "/ingredients/addIngredient", ingredientData) )
}

export default useCreateIngredient