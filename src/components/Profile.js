import React,{useContext} from "react";
import UserContext from "./contex/User/UserContext";

function Profile() {
    const {selectedUser}=useContext(UserContext)
    return ( 
        <>
         {
             selectedUser
             ?<div className="card card-body text-center">
                 <img width="100" className=" rounded-circle m-auto img-fluid" src={selectedUser.avatar} alt="" />
                 <p>{selectedUser.first_name}  {selectedUser.last_name}</p>
                 <p>email: {selectedUser.email}</p>
             </div>
             :<h1>No user Selected</h1>
         }
        </>
    );
}

export default Profile;