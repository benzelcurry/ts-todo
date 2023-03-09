import React, { useRef } from 'react';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form action="">
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id='todo-text' ref={textInputRef} />
      </div>
      <button onClick={todoSubmitHandler} type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;