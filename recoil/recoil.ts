import { atom, selector } from 'recoil';
import { TodoItemType } from "./types";
export const countState = atom({
  key: 'count',
  default: 0,
});

export const incrementCount = selector({
  key: 'incrementCount',
  get: ({ get }) => {
    let cs = get(countState);
    return cs;
  },
  set: ({ set }) => set(countState, (currCount) => currCount + 1),
});

export const decrementCount = selector({
  get: ({ get }) => {
    let cs = get(countState);
    return cs;
  },
  key: 'decrementCount',
  set: ({ set }) => set(countState, (currCount) => currCount - 1),
});
let initialTodoList: TodoItemType[] = [];
export const todoListState = atom({
  key: 'TodoList',
  default: initialTodoList,
});


export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});



export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((todo) => todo.isComplete);

      case "Show Uncompleted":
        return list.filter((todo) => !todo.isComplete);
      default:
        return list;

    }

  }
})


export const todoListStatsState = selector({
  key: 'TodoListStats',
  get: ({ get }) => {
    const todoList: TodoItemType[] = get(todoListState);

    let totalNum = todoList.length;
    const totalCompletedNum: number = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum: number = totalNum - totalCompletedNum;
    const percentCompleted: number = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});