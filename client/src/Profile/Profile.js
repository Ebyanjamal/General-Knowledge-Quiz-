import React from 'react' 
import ProfileDetails from './ProfileDetails';


function Profile({users}){
console.log(users)

    return(
        <div>
        <h1> Users Of Website 🧠 </h1>
        
        {users.map(user => {
            return (
                <ProfileDetails user={user} key={user.id} />
            )
        })}
        </div>
    )
}


export default Profile; 