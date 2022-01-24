import { useState } from "react";
import NavBarContext from "./NavBarContext";

const NavBarState = (props) => {
  const [user, setUser] = useState("");
  return (
    <NavBarContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
};

export default NavBarState;
