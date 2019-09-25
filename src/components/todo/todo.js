import React, { useReducer, useState } from 'react';

import Auth from '../auth/auth.js';

import styles from './todo.module.scss';

const initialState = {
  toDoItems: []
};

function reducer(state, action) {
  switch(action.type) {
    case "add":
    return {toDoItems: [...state.toDoItems, action.data]};
    case "toggle":
    let toDoItems = state.toDoItems.map( (item,idx) =>
          idx === action.data ? {title: item.title, status:!item.status} : item
        );
        return {...state, toDoItems };
    default:
    throw new Error();
  }
}

export default function HookedTodo (props) {
  const [item, setItem] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleForm = (e) => {
    e.preventDefault();
    e.target.reset();
    let updatedItem = { title:item, status:false };
    dispatch({type: "add", data: updatedItem});

  };
    
  const handleChange = (e) => {
    setItem([e.target.value]);
  }
    
  const toggle = (e,id) => {
    e.preventDefault();
    dispatch({type: 'toggle', data: id});
  };

  console.log(state);
  return (
    <section className={styles.todo}>

      <Auth capability="read">
        {state.toDoItems.map((item, idx) =>
          <div key={idx} onClick={(e) => toggle(e, idx)}>
            <span className={styles[`complete-${item.status}`]}> {item.title} </span>
          </div>
        )}
      </Auth>

      <Auth capability="create">
        <form onSubmit={handleForm}>
          <input
            onChange={handleChange}
            name="item"
            placeholder="Add To Do List Item Here"
          />
        </form>
      </Auth>

    </section>
  );
}
