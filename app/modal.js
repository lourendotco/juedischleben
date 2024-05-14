import { createPortal } from "react-dom";

export default function Modal({ children, shouldShow, onRequestClose }) {

  if (!children || !shouldShow) return null
  
  return createPortal(
    <div
      className="fixed z-50 w-full h-screen overflow-auto bg-white/90 left-0 top-0"
      onClick={onRequestClose}
    >
      <div
        className="bg-[white] relative md:w-1/2 min-h-96 mx-1 md:mx-auto my-[2.5vh] rounded-lg border border-black border-b-4 overflow-scroll h-[95vh] p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-2 p-1 hover:bg-white text-2xl font-extralight"
          onClick={onRequestClose}
        >
          x
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}