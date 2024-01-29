/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => axios.delete(`http://localhost:2804/api/recipes/${id}`));
};

export default useDeleteRecipe;