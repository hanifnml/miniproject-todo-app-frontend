import React, { useState } from "react";

// Bootstrap Component
import { Button } from "react-bootstrap";

// Components
import ToDoCard from "../modules/ToDoCard";

export default function UserDashboard() {
  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
      title: "Todo 2",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
      title: "Todo 3",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
  ]);

  return (
    <div className="mt-5">
      <div className="header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">To Do</h4>
        <div>
          <Button variant="primary">Add New</Button>
        </div>
      </div>
      <div className="todo-items mt-5">
        {todos.map((item, index) => (
          <ToDoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
