/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { User } from "../utils/types";
import { BASE_URL } from "../constants";

const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, userData }: { id: any; userData: User }) => axios.put(BASE_URL + `/users/${id}`, userData));
};

export default useEditProfile;