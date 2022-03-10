import React from "react";
import { Table } from "react-bootstrap";
import User from "./User";
const UsersList = ({ users }) => {
  return (
    <>
      {!users || users?.length === 0 ? (
        <div className="empty-search">
          <h3>unfortunately no users matched your search parameters</h3>
        </div>
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Home Town</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              console.log(user);
              return <User key={index} profile={user} />;
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UsersList;
