export default function ProjectsSidebar() {
  return (
    <aside className="bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50">
      <h2 className="mb-8 font-bold text-stone-200 md:text-xl uppercase">
        I tuoi Progetti
      </h2>
      <div>
        <button className="bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded text-emerald-400 hover:text-emerald-100 text-xs md:text-base">
          + Aggiungi progetto
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
