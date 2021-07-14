import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/GlobalState";
import { Button, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const DeleteEmployee = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const { id } = useParams();

  const deleteUser = (id) => {
    const data = user.filter((get) => get.id != id);
    setUser([...data]);
    history.push('/viewEmployee');
  };
  return (
    <>
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Are You Sure?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Link to="/viewEmployee">
              <Button className="delete__btn" variant="info">
                Cancel
              </Button>
              <Button onClick={() => deleteUser(id)} variant="danger">
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default DeleteEmployee;
