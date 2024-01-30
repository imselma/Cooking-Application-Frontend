/* eslint-disable @typescript-eslint/no-unused-vars */

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";

const useUserById = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => axios.get(BASE_URL + `/users/notDTO/${id}`).then((response) => response.data),);
};

export default useUserById;