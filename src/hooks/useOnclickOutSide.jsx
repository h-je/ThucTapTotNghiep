import { useEffect, useRef, useState } from "react";

const useClickOutSide = () => {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleClickOutModal = (e) => {
      nodeRef.current && !nodeRef.current.contains(e.target) && setShow(false);
    };

    document.addEventListener("click", handleClickOutModal);

    return () => {
      document.removeEventListener("click", handleClickOutModal);
    };
  }, []);

  return { nodeRef, show, setShow };
};

export default useClickOutSide;
