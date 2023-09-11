import { useLocation } from "react-router-dom"
import { Navbar } from "./Navbar";
import { Posts } from "./Posts";

export const Home = () => {
  const location = useLocation();
  return (
    <>
      <Navbar username={location.state.user.username} />
      <Posts />
    </>
  )
}
