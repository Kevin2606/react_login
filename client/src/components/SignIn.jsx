import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
  let redirect = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //FETCH CONFIG METHODS
  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };

  //API REQUEST
  const Fetch = async (event) => {
    event.preventDefault();

    config.method = "POST";
    config.body = JSON.stringify({ email, password });

    try {
      let result = await (
        await fetch("http://localhost:5176/auth/login", config)
      ).json();

      //IF USER NOT FOUND
      if (result.status == 200) {
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
        alert("User not found");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white">
      <form
        onSubmit={Fetch}
        id="formSignIn"
      >
        <h1 >Iniciar sesion</h1>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div >
          <input
            type="submit"
            value={"Ingresar"}
          />
          <p >
            Sin cuenta?
            <Link to="/signUp" >
              Registrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
