export default function Input({ isTextarea, label, ...props }) {
  const classes =
    "bg-stone-200 p-1 border-stone-300 focus:border-stone-600 border-b-2 rounded-sm focus:outline-none w-full stext-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-stone-500 text-sm uppercase bold">{label}</label>
      {isTextarea ? (
        <textarea className={classes} {...props}></textarea>
      ) : (
        <input className={classes} {...props}></input>
      )}
    </p>
  );
}
