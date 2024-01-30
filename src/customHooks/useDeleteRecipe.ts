/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { String } from "aws-sdk/clients/batch";
import { BASE_URL } from "../constants";

const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: any) => axios.delete(BASE_URL + `/recipes/${id}`));
};

export default useDeleteRecipe;