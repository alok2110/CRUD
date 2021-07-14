import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/GlobalState";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EditEmployee = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const { id } = useParams();
  const data = user.filter((get) => get.id == id);
  const [state, setState] = useState({
    id: data[0].id,
    name: data[0].name,
    email: data[0].email,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([state]);
    history.push("/viewEmployee");
  };
  return (
    <>
      <Container style={{ marginTop: "15px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditEmployee;
