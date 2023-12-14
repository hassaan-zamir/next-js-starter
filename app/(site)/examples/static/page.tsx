interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

const ExampleClient = async (): Promise<JSX.Element> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'no-store',
  });

  const todos: Todo[] = await res.json();

  const date = new Date().toLocaleTimeString();

  console.log(todos);
  
  return (
    <>
      <p>Date : {date}</p>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo.userId} - {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleClient;
