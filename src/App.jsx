import { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const restErrorMessage = () => {
    setErrorMessage("")
  }

  const addUser = (name, age) => {
    if (name === "" || age === "") {
      setErrorMessage("Some input(s) are empty.")
    } else if (age < 1) {
      setErrorMessage("The age cannot be lower than one year old. ")
    } else {
      setUsers((prevState) => {
        return [...prevState, { id: Math.random(), username: name, age: age}]
      })
    }
  }

  return (
    <div className="flex flex-col gap-16 p-8">
      { errorMessage !== "" && <Modal error={errorMessage} closeModal={restErrorMessage} />}
      <Form onSubmit={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
