import { useState } from "react";
import { useNavigate } from "react-router";




function Login(){
    const [user, setCurrentUser] = useState(null);
    const updateUser = (user =>setCurrentUser(user))

    const [loginData, setLoginData] = useState({
        email:'',password:''
    })

    let navigate = useNavigate();

  

   

 

    function handleChange(e){
        setLoginData({
            ...loginData,[e.target.name]: e.target.value
        });

    }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(loginData),
    }).then((res)=> {
        if(res.ok){
            res.json().then((user) => {
                updateUser(user);
                navigate('/home')
            });
        }
       else {
        res.json().then((errors) => {
            console.log(errors);
          });
       }
    })
  }

    

    return(
        <>
    <form onSubmit={handleSubmit} >
  <label>
    Email:
    <input
     type="text" 
     name="email"
     placeholder="email"
     value={loginData.email}
     onChange={handleChange}
      />
  </label>

  <label>
    Password:
    <input
     type="password" 
     name="password"
     placeholder="Password"
     value={loginData.password}
     onChange={handleChange}
     />
  </label>
<button type="submit" > Login In  </button>


</form>
        </>
    )
}

export default Login;