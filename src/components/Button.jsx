export default function Button({ accent, children, ...props }) {
  let classes = " px-4 py-2 rounded  text-xs md:text-base";

  classes += accent
    ? " bg-emerald-600 hover:bg-emerald-700 text-emerald-100 hover:text-emerald-400"
    : " bg-emerald-700 hover:bg-emerald-600 text-emerald-400 hover:text-emerald-100";
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
