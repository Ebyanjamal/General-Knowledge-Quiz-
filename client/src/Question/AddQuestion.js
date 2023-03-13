import React from "react";
import {useState} from 'react'
import { useNavigate } from "react-router";
import updateQuestion from "./UpdateQuestion";
import {NavLink} from 'react-router-dom';

function AddQuestion(){
    const [errors,setErrors] = useState([])
    const navigate = useNavigate()
    const [questionData, setQuestionData] = useState({
        text:'',
        correct_answers:'',
        incorrect_answers:'' 
      })
    
      function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setQuestionData({...questionData, [name]: value})
    }

    function handleSubmit(e){
   e.preventDefault()
   fetch(`/game_questions`,{
   method:'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify(questionData)
  }).then(res => {
    if (res.ok){
        res.json().then(
            navigate('/home'),
            window.alert('New Question Added 🙌🏻')
        )
    } else {
        res.json().then(json => setErrors(json.error))
    }
  })

    }
    return(
        <div>

        <NavLink to ={`/updateQuestion`} >
            <button> Update Question 🧠</button>
        </NavLink>
            <form onSubmit={handleSubmit} >
                <label for='text'> Question Test</label>
                    <input
                    type='text'
                    placeholder="text"
                    name="text"
                    id="text"
                    value={questionData.text}
                    onChange={handleChange}
                    />

                <label for='correct_answers'> Correct Answer </label>
                    <input
                    type='text'
                    placeholder="Correct Answer"
                    name="correct_answers"
                    id="correct_answers"
                    value={questionData.correct_answers}
                    onChange={handleChange}
                    />
                


                <label for='incorrect_answers'>Incorrect Answers </label>
                    <input
                    type='text'
                    placeholder="incorrect_answers"
                    name="incorrect_answers"
                    id="incorrect_answers"
                    value={questionData.incorrect_answers}
                    onChange={handleChange}
                    />
                    <button type="submit"> Add</button>
            </form>
        
        </div>
    )
}

export default AddQuestion;