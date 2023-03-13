import React from "react";
import "./Signup.css";
import { useState } from "react";



function Signup() {
  const [user, setCurrentUser] = useState("");
  

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
        if (response.ok) {
          response.json().then((user) => {
            setCurrentUser(user);

          });
        } else {
          response.json().then((errors) => {
            console.log(errors);
          });
        }
      })
      .catch((err) => console.err(err));
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs">
      <h2 className=" margin-top:40px " >Register Here!</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="name"
        >
          Name
        </label>
        <input
         className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"
          type="text"
          placeholder="name"
          name="name"
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
    
    <div className="flex items-center justify-between" > 
      <button type="submit"> SIGN UP ◉</button>
      </div>
    </form>
  );
}

export default Signup;
