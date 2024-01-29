
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useUserById = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => axios.get(`http://localhost:2804/api/users/notDTO/${id}`).then((response) => response.data),);
};

export default useUserById;