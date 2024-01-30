/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";


const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: any) => axios.delete(`https://cooking-app-backend.onrender.com/recipes/${id}`));
};

export default useDeleteRecipe;