import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateQuestion({onUpdateQuestion}){
    const navigate = useNavigate()
    const { id } = useParams();

    const [updatedQuestionData, setUpdatedQuestionData] = useState({
        text:'',
        correct_answers:'',
        incorrect_answers:''
    })

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setUpdatedQuestionData({...updatedQuestionData, [name]: value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/game_Questions/${id}`, {
            method: "PATCH",
            headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({...updatedQuestionData}),
        })
        .then((res) => res.json())
        .then((updatedQuestion) => {
            onUpdateQuestion(updatedQuestion)
            navigate(`/home`)
            window.alert("Question Updated!")
        })
    }
    return(
        <div>
      <form onSubmit={handleSubmit}>
      <label for='text'> Question Test</label>
                    <input
                    type='text'
                    placeholder="text"
                    name="text"
                    id="text"
                    value={updatedQuestionData.text}
                    onChange={handleChange}
                    />
                   <label for='correct_answers'> Correct Answer </label>
                    <input
                    type='text'
                    placeholder="Correct Answer"
                    name="correct_answers"
                    id="correct_answers"
                    value={updatedQuestionData.correct_answers}
                    onChange={handleChange}
                    />
                 <label for='incorrect_answers'>Incorrect Answers </label>
                    <input
                    type='text'
                    placeholder="incorrect_answers"
                    name="incorrect_answers"
                    id="incorrect_answers"
                    value={updatedQuestionData.incorrect_answers}
                    onChange={handleChange}
                    />
                    <button type="submit"> Add</button>
      </form>
        </div>
    )
}

export default UpdateQuestion;