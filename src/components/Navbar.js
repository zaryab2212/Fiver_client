import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogOutAsync, userLogout } from "../redux/user/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isActive, setisActive] = useState(true);
  const [isActiveBurger, setisActiveBurder] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { login } = useSelector((state) => state.user);
  const [page, setPage] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const smallscreen = true;
  // const smallscreen = window.screen.width > 720;

  // const move = {
  //   Gigs: <Link to="gig"></Link>,
  // };

  const handleDropDown = (e) => {
    if (e.target.value === "login") {
      dispatch(userLogOutAsync());
    }
    navigate(`/${e.target.value}`);
  };

  const Listner = () => {
    if (window.scrollY > 0) {
      setisActive(false);
    } else setisActive(true);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", Listner);

  //   navigate("/");

  //   return () => {
  //     window.removeEventListener("scroll", Listner);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="container 
    "
    >
      <nav
        className={`navbar ${
          isActive ? "activeNav" : "nav"
        } navbar-expand-lg flex d-flex justify-content-between navbar-light bg-light`}
      >
        <div className="">
          <Link
            to="/"
            className={`navbar-brand  ${
              isActive ? "activelogo" : "logo"
            } bold `}
          >
            Fiver
          </Link>
        </div>
        {screenWidth <= 700 && !isActiveBurger && (
          <button
            onClick={() => setisActiveBurder(!isActiveBurger)}
            className="navbar-toggler mx-2
             text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu width={7} height={7} />
          </button>
        )}
        {(screenWidth > 700 || isActiveBurger) && (
          <div
            className="flex d-flex gap-5 m-2 p-1"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/mygigs"
                >
                  Personal Gigs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/gigs"
                >
                  Explore
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/add-gig"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Become a Seller
                </Link>
              </li>
              <li className="nav-item">
                {!login && (
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Sign in
                  </Link>
                )}
                {login ? (
                  <>
                    <div class="text-center text-success bg-light rounded-3 m-1 p-1 fs-6">
                      {login.userName}
                    </div>
                    <div class="text-center ">
                      <img
                        src={login.image}
                        class=" userProfileImg"
                        alt={login?.userName}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li className="nav-item">
                {!login && (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    <button className="btn text-light btn-outline-light">
                      join
                    </button>
                  </Link>
                )}
                {login && (
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => handleDropDown(e)}
                  >
                    {login.isSeller && (
                      <>
                        <option value={"gigs"}>Gigs</option>

                        <option value={"add"}>Add Gig</option>
                      </>
                    )}
                    <option value={"messages"}>Messages</option>
                    <option value={"orders"}>Orders</option>
                    <option value={"login"}>Logout</option>
                  </select>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
