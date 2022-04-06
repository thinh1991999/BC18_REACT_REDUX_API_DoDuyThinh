import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to={"/"}
            className={(navData) =>
              navData.isActive ? "active nav-link" : "nav-link"
            }
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            to={"/dssv"}
            className={(navData) =>
              navData.isActive ? "active nav-link" : "nav-link"
            }
          >
            Danh Sách Sinh Viên
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
