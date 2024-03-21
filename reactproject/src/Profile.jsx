import {useContext} from "react";
import UserContext from "./context/Usercontext";

function Profile() {
   const {user} = useContext(UserContext);
   if(!user) return <div>Please Login to continue..</div>
   return <div>{user.username}</div>
}

export default Profile
