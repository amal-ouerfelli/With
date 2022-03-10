import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { host } from "../config/Host";
import Title from "./Title";

const UsersFilter = ({ setUsers }) => {
  const [gender, setGender] = useState();
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [hometown, setHomeTown] = useState();

  var genders = ["all", "Female", "Male"];
  genders = genders.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  const mutation = useMutation((data) =>
    axios.get(`${host}/api/profile/${data.url}`).then((res) => {
      if (res) {
        return res.data;
      }
    })
  );

  const Filter = async () => {
    var url = "?";
    if (hometown) {
      url = url + "HomeTown=" + hometown + "&";
    }
    if (minAge !== 0) {
      url = url + "MinAge=" + minAge + "&";
    }
    if (maxAge !== 100) {
      url = url + "&" + "MaxAge=" + maxAge + "&";
    }
    if (gender != "") {
      console.log(gender);
      if (gender === "Female") {
        url = url + "Gender=F" + "&";
      } else {
        if (gender === "Male") {
          url = url + "Gender=M" + "&";
        } else {
          setGender("");
        }
      }
    }

    await mutation.mutate({ url: url });
  };
  useEffect(() => {
    setUsers(mutation.data);
  }, [mutation.data]);

  return (
    <section className="filter-container">
      <Title title="search users" />
      <form className="filter-form">
        {/* select gender */}
        <div className="form-group">
          <label htmlFor="type">Gender of user :</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            onChange={(e) => setGender(e.target.value)}
          >
            {genders}
          </select>
        </div>
        {/* end select gender */}

        {/* Age */}
        <div className=" multi-range-field form-group">
          <label htmlFor="age"> Age : </label>
          <Row>
            <Col>
              <input
                type="number"
                name="minAge"
                placeholder="Minimum"
                id="minAge"
                min={0}
                max={100}
                onChange={(e) => setMinAge(e.target.value)}
                className=" form-control"
              />
            </Col>
            <Col>
              <input
                type="number"
                name="maxAge"
                id="maxAge"
                placeholder="Maximum"
                min={0}
                max={100}
                onChange={(e) => setMaxAge(e.target.value)}
                className=" form-control"
              />
            </Col>
          </Row>
        </div>
        {/* end of Age */}

        {/* Home Town */}
        <div className="form-group">
          <label htmlFor="size">Home Town :</label>
          <input
            type="text"
            name="hometown"
            id="size"
            value={hometown}
            onChange={(e) => setHomeTown(e.target.value)}
            className="size-input"
            placeholder="Your Home Town"
          />
        </div>
        {/* end of Home Town */}

        <Button
          style={{ backgroundColor: "#048B9A" }}
          className="Button"
          onClick={() => Filter()}
        >
          Filtrer
        </Button>
      </form>
    </section>
  );
};

export default UsersFilter;
