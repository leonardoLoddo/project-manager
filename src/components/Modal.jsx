import { createPortal } from "react-dom";
import Button from "./Button";
export default function Modal({ children, ref, buttonCaption }) {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-stone-900/90 shadow-md p-4 rounded-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button accent>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
