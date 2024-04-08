import React, { useCallback, useRef, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import { useEffect } from "react";

export const PopoverPicker = ({
  color,
  onChange,
  width = "100%",
  height = "100%",
}) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="relative">
      <div
        className="w-[28px] h-[28px] shadow-md cursor-pointer z-10 size-4 rounded-full ring-primary ring-offset-2 ring-offset-background transition-shadow hover:ring-1"
        style={{
          width: width,
          height: height,
          backgroundColor: color,
        }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div
          style={{
            top: "calc(100%+2px)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          }}
          className="absolute left-0 rounded-sm z-20"
          ref={popover}
        >
          <HexAlphaColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    };

    const validateEventStart = (event) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
