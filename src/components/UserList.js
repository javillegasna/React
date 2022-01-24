import React, { useEffect, useContext } from "react";
import UserContext from "./contex/User/UserContext";
function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);
  useEffect(() => {
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          key={user.id}
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          href="#!"
          onClick={()=>getProfile(user.id)}
        >
          <img
            src={user.avatar}
            className="img-fluid mr-4 rounded-circle"
            width="70"
            alt=""
          />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
}

export default UserList;
