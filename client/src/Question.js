function Question({ question, onAnswer }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAnswer) onAnswer(e.target.formData);
  };

  return (
    <div>
      <div>{question.text}</div>
      <div>{question.type}</div>

     
      <form action="" onSubmit={handleSubmit}></form>
    </div>
  );
}

export default Question;
