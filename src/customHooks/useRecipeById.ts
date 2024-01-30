/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Recipe } from "../utils/types";


const useRecipeById = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => axios.get<Recipe>(`https://cooking-app-backend.onrender.com/recipes/notDTO/${id}`).then((response) => response.data),);
};

export default useRecipeById;