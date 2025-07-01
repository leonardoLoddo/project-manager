import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50">
      <h2 className="mb-8 font-bold text-stone-200 md:text-xl uppercase">
        I tuoi Progetti
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Nuovo progetto</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
