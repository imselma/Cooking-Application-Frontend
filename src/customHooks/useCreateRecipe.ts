/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query"
import { Recipe } from "../utils/types";
import axios from "axios";
import { BASE_URL } from "../constants";


const useCreateRecipe = () => {
    const queryClient = useQueryClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation((recipeData: any) => 
    axios.post(BASE_URL + "/recipes/addRecipe", recipeData) )
}

export default useCreateRecipe