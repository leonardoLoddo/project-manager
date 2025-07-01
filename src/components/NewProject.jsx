import Input from "./Input";

export default function NewProject() {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-red-500 hover:text-red-800">Cancella</button>
        </li>
        <li>
          <button className="bg-emerald-600 hover:bg-emerald-800 px-6 py-2 rounded-md text-emerald-50">
            Salva
          </button>
        </li>
      </menu>
      <div>
        <Input label="Titolo" />
        <Input label="Descrizione" isTextarea />
        <Input label="Data di consegna" />
      </div>
    </div>
  );
}
