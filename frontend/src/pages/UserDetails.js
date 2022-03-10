import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { host } from "../config/Host";

const UserDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  useQuery("ListUsers", async () => {
    return axios
      .get(`${host}/api/profile/${id}`)

      .then((response) => {
        setProfile(response.data);

        return response.data;
      });
  });

  return (
    <Container style={{ alignItems: "center", marginTop: "3%" }}>
      <h1 style={{ marginBottom: "5%" }}>The user informations :</h1>
      {!profile ? (
        <Spinner variant="warning" />
      ) : (
        <Row style={{ width: "70%" }}>
          <Col>
            <img
              src="http://www.are.fr/wp-content/uploads/2016/05/logo-femme.png"
              alt="user"
            />
          </Col>
          <Col>
            <Table>
              <h5>First Name: {profile.user.first_name}</h5>
              <h5>Last Name: {profile.user.last_name}</h5>
              <h5>Age: {profile.profile.Age}</h5>
              <h5>Home Town: {profile.profile.HomeTown}</h5>
              <h5>Gender: {profile.profile.Gender}</h5>
              <h5>Email: {profile.user.email}</h5>
              <h5>Username: {profile.user.username}</h5>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default UserDetails;
