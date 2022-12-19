import { useState } from "react";
import axios from "axios";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
    }
    console.log("asd");
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
