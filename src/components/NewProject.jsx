import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    //al click su salva creo delle costanti che riempio con i valori nei campi input (che ho collegato con useRef)
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //creo un oggetto con i valori raccolti
    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    //passo l'oggetto come parametro della funzione onAdd
    onAdd(projectData);
  }

  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-red-500 hover:text-red-800">Cancella</button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-800 px-6 py-2 rounded-md text-emerald-50"
          >
            Salva
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} type="text" label="Titolo" />
        <Input ref={description} label="Descrizione" isTextarea />
        <Input ref={dueDate} type="date" label="Data di consegna" />
      </div>
    </div>
  );
}
