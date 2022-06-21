import { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";
import Navbar from "./Navbar";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !date) {
      // display alert
      setAlert({
        show: true,
        type: "danger",
        msg: "name and date can not be empty",
      });
    } else if (title && isEdit) {
      // edit
    } else {
      const newItem = {
        title: title,
        date: date,
        id: new Date().getTime().toString(),
      };
      setList([...list, newItem]);
      setTitle("");
      setDate("");
      setAlert({
        show: true,
        type: "success",
        msg: "added new to do",
      });
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        {alert.show && <Alert alert={alert} />}
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="title"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="date"
              className="input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            {isEdit ? "Edit" : "New Task"}
          </button>
        </form>
        <div className="underline"></div>
        <List list={list} />
      </main>
    </div>
  );
}

export default App;
