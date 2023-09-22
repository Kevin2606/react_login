import { useNavigate, useLocation } from "react-router-dom"
import { Navbar } from "./Navbar";
import { Posts } from "./Posts";
import { useEffect } from "react";

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const checkState = () => {
    if (location.state === undefined || !localStorage.getItem("token")) {
      navigate("/");
    }
  }

  useEffect(() => {
    checkState();
  }, []);

  return (
    <>
      <Navbar username={location.state?.user?.username} />
      <Posts />
    </>
  )
}
