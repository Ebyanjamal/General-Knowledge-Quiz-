function Question({ question, onAnswer }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAnswer) onAnswer(e.target.formData);
  };

  return (
    <div className="grid grid-cols-1" >
      <h1 className="font-semibold" >{question.text}</h1>
      
      <div>{question.incorrect_answers}</div>

     
      <form action="" onSubmit={handleSubmit}></form>
    </div>
  );
}

export default Question;
