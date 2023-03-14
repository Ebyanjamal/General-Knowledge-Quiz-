

import React from "react";


function ProfileDetails({user}){
    console.log(user)
    return(
        <div>
         <h3>{user.name}</h3>
         <h4>{user.email}</h4>
        </div>
    )
}

export default ProfileDetails; 