const TaskLists = ({
  filteredTask = [],
  handleDeleteTask,
  handleDeleteAllTasks,
  handleSubmitEditTask,
}) => {
  return (
    <div id="" className="mt-5">
      <h6 className="mb-3">لیست ها</h6>
      <p id="noneDataTitle" className="text-danger text-center w-100"></p>
      <ul id="ul_lists" className="list">
        {/* content */}
        {filteredTask.length > 0 ? (
          filteredTask.map((task, index) => (
            <li key={index} className="list-items">
              {task}{" "}
              <i
                className="mx-4"
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteTask(index)}
              >
                ❌
              </i>
              <i
                className="mx-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleSubmitEditTask(index)}
              >
                ✏️
              </i>
            </li>
          ))
        ) : (
          <li className="list-items text-center text-info">
            <p>❌ وجود ندارد ❌</p>
          </li>
        )}
      </ul>
      <button
        id="btn-RemoveAll"
        className="btn btn-outline-danger mt-5"
        onClick={handleDeleteAllTasks}
      >
        پاک کردن همه
      </button>
    </div>
  );
};

export default TaskLists;
