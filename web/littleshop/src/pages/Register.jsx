import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/Registration.css";
import Popup from "../components/Popup";

const BACKEND_REGISTER_URL = "http://localhost:5000/register";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  //const [role, setRole] = useState("buyer");
  const [popup, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const popupHandler = (e) => {
    return new Promise((resolve, reject) => {
      setShowPopUp(!e);
      setTimeout(() => {
        setShowPopUp(false);
        resolve()
      }, 2000);
    })
  };

  //const [registerStatus, setRegisterStatus] = useState("");
  // let [error, setError] = React.useState(null);
  const registerBackEnd = async () => {
    await axios.post(BACKEND_REGISTER_URL, {
      email: email,
      username: username,
      firstName: firstname,
      lastName: lastname,
      password: password,
      birthDate: birthdate,
      role: "buyer",
    }).then(async (response) => {
      console.log(response)
      if (response.status === 201) {
        setPopupTitle("LittleShop account management information");
        setPopupContent(`You have successfully created your account ${username} !`);
        localStorage.setItem("account", JSON.stringify({
          email: email,
          username: username,
          firstName: firstname,
          lastName: lastname,
          password: password,
          birthDate: birthdate,
          role: "buyer",
        }));
        await popupHandler();
        navigate("/login");
      }
    })
      .catch(async (error) => {
        if (error.response === 409) {
          setPopupTitle("LittleShop account management information");
          setPopupContent("Account creation failed, email or usermail alreay existant !");
          await popupHandler();
        } else {
          setPopupTitle("LittleShop account management information");
          setPopupContent("Account creation failed !");
          await popupHandler();
        }
      });
  }
  return (
    <div>
      <Navbar />
      <Popup trigger={popup} title={popupTitle} value={popupContent} />
      <div className="Registration">
        <h1 className="title-form">Registration</h1>
        <label>email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase());
          }}
        ></input>
        <label>username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label>firstname</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        ></input>
        <label>lastname</label>
        <input
          type="text"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        ></input>
        <label>password</label>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        {/* <label>role</label>
        <select id="roles" name="roles">
          onChange={(e) => setRole(e.target.value)}
          value={role}
          <option value="buyer">buyer</option>
          <option value="seller">seller</option>
        </select> */}
        {/* <input
          type="text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        ></input> */}
        <label className="birthdate">birthdate</label>
        <DatePicker
          selected={birthdate}
          onChange={(date) => {
            console.log(date);
            setBirthdate(date);
          }}
        />
        <br />
        <button className="register-button" onClick={registerBackEnd}>
          {" "}
          REGISTER{" "}
        </button>
      </div>
    </div>
  );
}

export default Register;
