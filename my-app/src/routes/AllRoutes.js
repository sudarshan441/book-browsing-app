import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Books from "../pages/Books";
import SingleBook from "../pages/SingleBook";
import MyBooks from "../pages/MyBooks";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:id" element={<SingleBook />} />
                <Route
                    path="/mybooks"
                    element={
                        <PrivateRoute>
                            <MyBooks />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default AllRoutes;