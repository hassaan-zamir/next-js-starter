interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

const ExampleClient = async (): Promise<JSX.Element> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  const todos: Todo[] = await res.json();

  console.log(todos);

  return (
    <>
      <p>hi there</p>
    </>
  );
};

export default ExampleClient;
