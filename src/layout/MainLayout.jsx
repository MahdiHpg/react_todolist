import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../scss/index.scss";
import AddNewTask from "../components/AddNewTask";
import TaskLists from "../components/TaskLists";

const MainLayout = () => {
  /**
   * * get All saved Tasks in localStorage
   */
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [addTask, setAddTask] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [error, setError] = useState("");
  const [searchTask, setSearchTask] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onChangeAddTask = (e) => setAddTask(e.target.value);

  const canSave = Boolean(addTask);

  /**
   * * add new task to localStorage
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * * add new Task
   */
  const handleSubmitAddTask = (e) => {
    e.preventDefault();
    if (editMode) {
      const allTasks = [...tasks];
      allTasks[editIndex] = addTask;
      setTasks(allTasks);
      setEditMode(false);
      setAddTask("");
      setEditIndex(null);
    } else {
      if (canSave) {
        const newTasks = [...tasks, addTask];
        setTasks(newTasks);
        setAddTask("");
        setError("");
      } else {
        setError("یک نام انتخاب کن ....");
        console.log(error);
      }
    }
  };

  /**
   * * edit a task
   */
  const handleSubmitEditTask = (index) => {
    setEditMode(true);
    setAddTask(tasks[index]);
    setEditIndex(index);
  };

  /**
   * * delete a task
   */
  const handleDeleteTask = (index) => {
    const allTasks = [...tasks];
    allTasks.splice(index, 1);
    setTasks(allTasks);
  };

  /**
   * * delete all tasks
   */
  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  /**
   * * search task
   */
  const onChangeSearchTask = (e) => {
    setSearchTask(e.target.value);
  };

  /**
   * * filter search tasks
   */
  const filteredTask = tasks.filter((task) =>
    task.toLowerCase().includes(searchTask.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="container">
        <main>
          <div className="container-md">
            {/* add new task */}
            <AddNewTask
              addTask={addTask}
              handleSubmitAddTask={handleSubmitAddTask}
              error={error}
              onChangeAddTask={onChangeAddTask}
              editMode={editMode}
            />
            {/* search Task */}
            <div id="searchPart" className="form-floating mt-4">
              <input
                id="input_search"
                type="search"
                value={searchTask}
                onChange={onChangeSearchTask}
                className="form-control"
                placeholder="جستجوی ..."
              />
              <label htmlFor="input_search">جستجوی ...</label>
            </div>
            <hr />
            {/* all Tasks */}
            <TaskLists
              handleSubmitEditTask={handleSubmitEditTask}
              filteredTask={filteredTask}
              handleDeleteAllTasks={handleDeleteAllTasks}
              handleDeleteTask={handleDeleteTask}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default MainLayout;
