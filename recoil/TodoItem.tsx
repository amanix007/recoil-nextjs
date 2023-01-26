import React from 'react'
import { useRecoilState } from "recoil";
import { removeItemAtIndex, replaceItemAtIndex } from './common';
import { todoListState } from './recoil'
import { TodoItemProp } from './types'

export default function TodoItem({ item }: TodoItemProp) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);
  const editItemText = (e: React.FormEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.currentTarget.value
    });

    setTodoList(newList);
  }
  const toggleItemCompletion = (e: React.FormEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  }


  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
