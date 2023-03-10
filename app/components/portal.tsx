import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type props = {
  children: React.ReactNode;
  wrapperId: string;
};

function createWrapper(wrapperId: string) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
}

export function Portal({ children, wrapperId }: props) {
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      element = createWrapper(wrapperId);
      created = true;
    }

    setWrapper(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapper === null) return null;

  return createPortal(children, wrapper);
}
