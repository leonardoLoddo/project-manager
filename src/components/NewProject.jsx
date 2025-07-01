import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    //al click su salva creo delle costanti che riempio con i valori nei campi input (che ho collegato con useRef)
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //validazione
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.showModal(); //mostro la modale
      return; //esco dalla funzione e non eseguo il codice successivo
    }
    //creo un oggetto con i valori raccolti e lo passo come parametro della funzione onAdd
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal buttonCaption={"Chiudi"} ref={modal}>
        <h2 className="my-4 font-bold text-stone-700 text-xl">
          Input non Valido
        </h2>
        <p className="mb-4 text-stone-600">
          Oops ... sembra che ti sia dimenticato di un valore.
        </p>
        <p className="mb-4 text-stone-600">
          Per favore assicurati di aver fornito un valore per ogni campo.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-red-500 hover:text-red-800"
            >
              Cancella
            </button>
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
    </>
  );
}
