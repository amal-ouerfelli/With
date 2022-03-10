import Banner from "../components/Banner";
import UsersList from "../components/UsersList";
import UsersFilter from "../components/UsersFilter";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { host } from "../config/Host";

const Home = () => {
  const [users, setUsers] = useState([]);
  useQuery("ListUsers", async () => {
    return axios.get(`${host}/api/profile/`).then((response) => {
      setUsers(response.data);
      return response.data;
    });
  });

  const handleFilter = (newUsers) => {
    setUsers(newUsers);
  };
  return (
    <div className="App">
      <Banner title="Welcome to With" />
      <UsersFilter setUsers={handleFilter} users={users} />

      <UsersList users={users} />
    </div>
  );
};

export default Home;
