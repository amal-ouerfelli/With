import React from "react";
import { useHistory } from "react-router-dom";

const User = ({ profile }) => {
  let history = useHistory();
  return (
    <tr onClick={() => history.push(`/${profile.idProfile}`)}>
      <td>{profile.user.first_name}</td>
      <td>{profile.user.last_name}</td>
      <td>
        {profile.Gender === "F" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/143/143552.png"
            height={30}
            alt="Female"
          />
        ) : (
          <img
            height={30}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Blue_male_symbol.svg/768px-Blue_male_symbol.svg.png"
            alt="male"
          />
        )}
      </td>
      <td>{profile.Age}</td>
      <td>{profile.HomeTown}</td>
    </tr>
  );
};

export default User;
