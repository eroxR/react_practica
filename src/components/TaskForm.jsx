import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [tittle, settittle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(tittle);
    // const newTask = {tittle}
    // console.log(newTask);
    createTask({
      tittle,
      description,
    });
    settittle("");
    setDescription("");
  };

  return (
<div className="max-w-md mx-auto">
<form className="bg-slate-800 p-10 mb-4" 
     onSubmit={handleSubmit} action="">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tyarea</h1>
      <input
      className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        onChange={(e) => settittle(e.target.value)}
        type="text"
        placeholder="Escribe tu tarea"
        value={tittle}
        autoFocus
      />
      <br />
      <br />
      <textarea
      className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe la descripcion de la tarea"
        value={description}
      />
      <br />
      <br />
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
</div>
  );
}

export default TaskForm;
