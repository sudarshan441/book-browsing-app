import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { isAuth } = useSelector((store) => store.auth);
    if (!isAuth) {
        alert("You Need To Login First");
        return  (<Navigate to="/login" />);
    }
    return children;
}
export default PrivateRoute;