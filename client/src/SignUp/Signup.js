import React from "react";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [user, setCurrentUser] = useState("");
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = { ...formData };


    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })

      .then((response) => {
        navigate('')
        if (response.ok) {
          response.json().then((user) => {
            setCurrentUser(user);
            navigate("/home")
          });
        } else {
          response.json().then((errors) => {
            console.log(errors);
          });
        }
      })
      .catch((err) => console.err(err));
  }

  <h2> Regestration</h2>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2>Register</h2>
      <div className="form-control flex ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="name"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          email
        </label>
        <input
          className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="email"
          name="email"
          id="sign_up_email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          password
        </label>
        <input
          className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          placeholder="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {/* <div className="flex gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          phone number
        </label>
        <input
          className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight
                 focus:outline-none focus:shadow-outline"
          type="tel"
          placeholder="xxx-xxx-xxxx"
          id="phone"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
        />
      </div> */}

      <button type="submit"> SIGN UP ◉</button>
    </form>
  );
}

export default Signup;
