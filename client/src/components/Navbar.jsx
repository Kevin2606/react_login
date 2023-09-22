import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = (props) => {
    const handleLogout = () => {
        localStorage.removeItem("token");
    };


    return (
        <>
            <div>
                <div>
                    <a>Pagina de inicio</a>
                </div>
                <div>
                    <a>{props.username}</a>
                    <Link to="/" onClick={handleLogout}>
                        Salir de la cuenta
                    </Link>
                </div>
            </div>
        </>
    );
};

Navbar.propTypes = {
    username: PropTypes.string.isRequired,
};
