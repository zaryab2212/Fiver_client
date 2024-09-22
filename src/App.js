import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { LoginAsync, getUserInfoAsync } from "./redux/user/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import AddGig from "./add/AddGig";
import Order from "./order/Order";
import Gig from "./gig/Gig";
import MyGig from "./myGig/MyGig";
import Messages from "./messages/Messages";
import Message from "./message/Message";
import Footer from "./footer/Footer";
import Gigs from "./gigs/Gigs";
import Login from "./login/Login";
import Register from "./register/Register";
import Protected from "./components/Protected";
import { getAllGigAsync } from "./redux/gigs/gigSice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.login) {
      dispatch(getUserInfoAsync());
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/orders"
            element={
              <Protected>
                <Order />
              </Protected>
            }
          />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route
            path="/mygigs"
            element={
              <Protected>
                <MyGig />
              </Protected>
            }
          />
          <Route
            path="/add"
            element={
              <Protected>
                <AddGig />
              </Protected>
            }
          />
          <Route
            path="/messages"
            element={
              <Protected>
                <Messages />
              </Protected>
            }
          />
          <Route
            path="/message/:id"
            element={
              <Protected>
                <Message />
              </Protected>
            }
          />
          <Route
            path="/add-gig"
            element={
              <Protected>
                <AddGig />{" "}
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
