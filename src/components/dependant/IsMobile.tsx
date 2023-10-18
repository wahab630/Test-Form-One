import React, { FC, useEffect } from "react";

interface IsMobileProps {
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsMobile: FC<IsMobileProps> = ({ setIsMobile }) => {
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 900);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);
  return <></>;
};

export default IsMobile;