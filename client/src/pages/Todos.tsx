import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Todos = () => {
  const allTodos = {};
  const [todos, setTodos] = useState(allTodos);

  useEffect(() => {
    // get all todos for loggedIn user
    setTodos(allTodos);
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div>Main Section</div>
      <Footer />
    </div>
  );
};

export default Todos;
