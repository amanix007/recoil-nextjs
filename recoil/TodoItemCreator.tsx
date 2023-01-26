import React, { useState } from 'react'
import { useSetRecoilState } from "recoil";
import { todoListState } from './recoil';
import { TodoItemType } from './types';
export default function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState)
  const [inputValue, setInputValue] = useState<string>("");
  const addItem = (): void => {
    setTodoList((oldTodoList: TodoItemType[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };
  return (
    <div>
      <input type="text" value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>ADD</button>
    </div>
  )
}
let id = 0;
function getId() {
  return id++;
}