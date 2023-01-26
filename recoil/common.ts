import { TodoItemType } from "./types";

export const replaceItemAtIndex = (arr: TodoItemType[], index: number, newValue: TodoItemType): TodoItemType[] => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}
export const removeItemAtIndex = (arr: TodoItemType[], index: number): TodoItemType[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}