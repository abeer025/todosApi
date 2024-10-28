const todos = [
  {
    id: 1,
    todo: "Buy groceries",
    isCompleted: false,
  },
  {
    id: 2,
    todo: "Finish project report",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "Call plumber",
    isCompleted: false,
  },
  {
    id: 4,
    todo: "Plan weekend hike",
    isCompleted: false,
  },
];

// GET handler: Fetch all todos
export async function GET(request) {
  return Response.json({
    data: todos,
    msg: "Todos fetched successfully.",
  });
}

// POST handler: Add a new todo
export async function POST(request) {
  const data = await request.json();
  const newTodo = {
    id: todos.length + 1,
    todo: data.todo,
    isCompleted: false,
  };
  todos.push(newTodo);
  console.log("Data from frontend to backend=>", data);

  return Response.json({
    data: todos,
    msg: "Todo added successfully.",
  });
}

// PUT handler: Update an existing todo
export async function PUT(request) {
  const data = await request.json();
  console.log("Update todo in backend==>", data);

  const todoIndex = todos.findIndex((todo) => todo.id === data.id);
  if (todoIndex === -1) {
    return Response.json({
      msg: "Todo not found.",
    }, { status: 404 });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...data,
  };

  return Response.json({
    data: todos,
    msg: "Todo updated successfully.",
  });
}

// DELETE handler: Remove a todo by ID
export async function DELETE(request) {
  const data = await request.json();
  console.log("Delete todo in backend==>", data.id);

  const todoIndex = todos.findIndex((todo) => todo.id === data.id);
  if (todoIndex === -1) {
    return Response.json({
      msg: "Todo not found.",
    }, { status: 404 });
  }

  todos.splice(todoIndex, 1);

  return Response.json({
    data: todos,
    msg: "Todo deleted successfully.",
  });
}
