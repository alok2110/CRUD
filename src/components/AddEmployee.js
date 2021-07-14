import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/GlobalState";
import { useHistory } from "react-router-dom";
import Validations from "./Validations";
import "./Form.css";
import SuccessModal from "./SuccessModal";

const AddEmployee = () => {
  const [state, setState] = useState({
    id: Math.floor(Math.random() * 100) + 1,
    email: "",
    name: "",
  });
  const [user, setUser] = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [modal, setModal] = useState(false);
  
  const history = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validations(state));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setUser([...user, state]);
      setModal(true);
    }
  }, [errors]);

  return (
    <>
    {
      modal ? <SuccessModal /> : <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src="img/img-2.svg" alt="spaceship" />
      </div>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>
            Get started with us today! Create your account by filling out
            the information below.
          </h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <button className="form-input-btn" type="submit">
            Sign up
          </button>
        </form>
        
      </div>
    </div>
    }
        
    </>
  );
};

export default AddEmployee;
