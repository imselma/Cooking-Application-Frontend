/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Recipe } from "../utils/types";
import { BASE_URL } from "../constants";

const useRecipeById = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => axios.get<Recipe>(BASE_URL + `/recipes/notDTO/${id}`).then((response) => response.data),);
};

export default useRecipeById;