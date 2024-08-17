import { useState } from "react";

function Popover() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="absolute bottom-0 right-0 font-extrabold text-3xl p-2">
      {!isOpen ? (
        <button onClick={toggle}>+</button>
      ) : (
        <div className="popover-content">Popover content
          <button onClick={toggle}>X</button>
        </div>
      )}
    </div>
  );
}

export default Popover;
