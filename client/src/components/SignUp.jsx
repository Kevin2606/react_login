import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  let redirect = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //FETCH CONFIG METHODS
  const config = {
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

  //API REQUEST
  const Fetch = async (event) => {
    event.preventDefault();

    config.method = "POST";
    config.body = JSON.stringify({ username, email, password });

    try {
      let result = await (
        await fetch("http://127.25.25.27:3300/auth/signUp", config)
      ).json();

      if (result.status === 200) {
        localStorage.setItem("token", result.token);
        redirect("/home", {
          state: {
            user: {
              username: result.data.username,
              email: result.data.email
            }
          }
        })
      } else {
        alert("Ha ocurrido un error al registrarse");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        onSubmit={Fetch}
        className="h-screen flex flex-col justify-center items-center gap-y-4 bg-indigo-700">
        <h1 className="text-white font-bold pt-3">SIGN UP</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
          className="md:w-1/2 lg:w-1/3 bg-gray-100 border-black outline-none border-l-4 p-2 text-indigo-700"
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          className="md:w-1/2 lg:w-1/3 bg-gray-100 border-black outline-none border-l-4 p-2 text-indigo-700"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          className="md:w-1/2 lg:w-1/3 bg-gray-100 border-black outline-none border-l-4 p-2 text-indigo-700"
          placeholder="Password"
        />
        <div className="grid place-items-center ">
          <input
            type="submit"
            className="w-40 bg-indigo-200 text-black font-bold hover:bg-black hover:text-white  p-2"
          />

          <p className="mt-5 gap-x-2 text-center text-sm text-gray-200">
            Already a member?
            <Link to="/" className="p-2 text-white font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
