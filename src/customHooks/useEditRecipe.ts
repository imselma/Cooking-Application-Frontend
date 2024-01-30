/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Recipe2 } from "../utils/types";


const useEditRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, recipeData }: { id: any; recipeData: Recipe2 }) => axios.put(`https://cooking-app-backend.onrender.com/api/recipes/${id}`, recipeData));
};

export default useEditRecipe;