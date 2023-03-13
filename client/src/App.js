import React, { useState, } from "react";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import Home from "./Home";
import AddQuestion from "./Question/AddQuestion";
import UpdateQuestion from "./Question/UpdateQuestion";
import { Route, Routes} from "react-router-dom";
import { Nav } from "./Nav";
import Question from "./Question";
import "./index.css"

 function App() {

  const [game_questions, setGame_Questions] = useState([])

  function handleDelete(deleteQuestion){
    const updatedQuestion = game_questions.filter(question => question.id !== deleteQuestion.id)
    setGame_Questions(updatedQuestion)
  }


  function onUpdateQuestion(){
    const updatedQuestion = game_questions.map(question => question.id === updatedQuestion.id ? updatedQuestion : question)
    setGame_Questions(updatedQuestion)
  }


  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);




  return (
    <>
      <Nav /> 
     

      <Routes>
        <Route path="/Signup" exact element={<Signup />}></Route>
        <Route path="/Login" exact element={<Login />}></Route>
        <Route path="/home" element={<Home handleDelete={handleDelete} />}></Route>
        {/* <Route path="*" element={<Navigate to="Signup" />}></Route> */}
        <Route path="/AddQuestion" element={<AddQuestion/>}></Route>
        <Route path="/UpdateQuestion" element={<UpdateQuestion onUpdateQuestion={onUpdateQuestion} />}></Route>
      </Routes>
    
    </>
  );
}

export default App;
