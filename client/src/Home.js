import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { makeFetch } from "./makeFetch";
import Question from "./Question";
import {NavLink} from 'react-router-dom'




function Home({handleDelete}) {
  const [questions, setQuestions] = useState([]);
  const [quizeIndex, setQuizeIndex] = useState(0);
  const navigate = useNavigate()


  function handleQuestion(){
    fetch(`game_questions`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
    
    })
      }


      function handleDeleteQuestion(){
        fetch('game_questions',{
            method:'DELETE'
        }).then(handleDelete(questions))
      }

 

  const handleLogOut = () => {
    fetch(`/logout`,{
        method:'DELETE'
    })
    .then(res => {
        if(res.ok){
         navigate('/login')
        }
    })
  }
//   console.log(users)


  useEffect(() => {
    makeFetch("/game_questions")
      .then((response) => response.json())
      .then((qList) => setQuestions(qList))
      .catch(console.error);
  }, []);

  if (!questions.length) {
    return <>Loading questions...</>;
  }

  const advanceQuestion = (/** @type {'next'|'previous'} */ direction) => {
    switch (direction) {
      // previous goes to the previous question, previous on the first question will return the last question from questions
      case "previous":
        setQuizeIndex(quizeIndex === 0 ? questions.length - 1 : quizeIndex - 1);
        break;

      // next go to the next question, next on the last question will return the first question from questions
      case "next":
        setQuizeIndex((quizeIndex + 1) % questions.length);
        break;
      default: {
        console.log("Error: invalid action");
      }
    }
  };
  const answerQuestion = (answer, qIndex = quizeIndex) => {
    //set answer
    // advance to next qauestion
    advanceQuestion("next");
  };

  const question = questions[quizeIndex];

  return (
    <div>
     <NavLink to={`/Profile`} >
       <button> Users Log In  </button>
      </NavLink>
        <button onClick={handleLogOut} > Log Out ✌🏼 </button>  
        <button onClick={handleDeleteQuestion} > Delete Question 🗑 </button>
        
        <NavLink to ={`/AddQuestion`} >
            <button onClick={handleQuestion} >Add Question 🧠</button>
        </NavLink>

      <div className="questin_text d-flex ">
        {quizeIndex + 1}
        <Question
          question={question}
          key={question.id}
          onAnswer={answerQuestion}
        />
      </div>

      <div className="actions">
        <button className="btn btn-primary" onClick={() => advanceQuestion("previous")}>preview</button>

        <button
          onClick={() => advanceQuestion("next")}
          className="btn btn-primary"
        >
          next
        </button>

    
        
      </div>
    </div>
  );
}

export default Home;
