import React, { useContext } from "react";
import { UserContext } from "../Context/GlobalState";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewEmployee = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <Container style={{ marginTop: "15px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <Link to={`/editEmployee/${data.id}`}>
                      <button>Edit</button>
                    </Link>
                    <Link to={`/deleteEmployee/${data.id}`}>
                      <button>Delete</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ViewEmployee;
