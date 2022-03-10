import axios from "axios";
import { useQuery } from "react-query";
import { host } from "../config/Host";

const DetailsUserQuery = ({ id }) => {
  return useQuery("ListUsers", async () => {
    return axios
      .get(`${host}/api/profile/${id}`)

      .then((response) => {
        return response.data;
      });
  });
};

export { DetailsUserQuery };
