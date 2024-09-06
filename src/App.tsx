import { useState } from 'react';
import { TodoList } from './compoments/TodoList';
import { dummyTodoList } from './data/dummyTodoList';
import { AddTodoForm } from './compoments/AddTodoForm';
import { TodoSummary } from './compoments/TodoSummary';

const App = () => {
  const [todoList, setTodoList] = useState(dummyTodoList);

  // 対象のtodoの完了を変更
  const changeCompleted = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  };
  // todoの追加
  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      return [newTodo, ...prevTodoList];
    });
  };
  // todoの削除
  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  // 完了したtodoをすべて削除
  const deleteAllCompleted = () => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  return (
    <main className="mx-auto mt-10 max-w-x1">
      <h1 className="text-center text-4x1">Todo App</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="space-y-5 rounded bg-slate-200 p-5">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
          <TodoSummary deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
};

export default App;
