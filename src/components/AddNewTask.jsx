const AddNewTask = ({
  addTask,
  onChangeAddTask,
  error,
  handleSubmitAddTask,
  editMode,
}) => {
  return (
    <form id="addForm" autoComplete="off">
      <div className="form-floating">
        <input
          id="input_add_list"
          type="text"
          className="form-control"
          value={addTask}
          onChange={onChangeAddTask}
          placeholder="یادآوری..."
        />
        <label htmlFor="input_add_list">یادآوری ...</label>
        {error ? (
          <p id="alertTextInput" className="text-danger mt-3">
            <small>{error}</small>
          </p>
        ) : (
          <p id="alertTextInput" className="text-danger mt-3 d-none"></p>
        )}
      </div>
      <button
        id="btn-addToDo"
        className="btn btn-success mt-4"
        onClick={handleSubmitAddTask}
      >
        {!editMode ? (
          <span>
            اضافه کردن <i>➕</i>
          </span>
        ) : (
          <span>
            ویرایش <i>✏️</i>
          </span>
        )}
      </button>
    </form>
  );
};

export default AddNewTask;
