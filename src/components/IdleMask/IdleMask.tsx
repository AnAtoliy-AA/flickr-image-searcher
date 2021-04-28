import React, { useEffect, useState } from "react";
import { ELEMENT_TEXT } from "../../shared/const";
import "./IdleMask.scss";

const IdleMask: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="IdleMask">
      {ELEMENT_TEXT.NOT_ACTIVE_USER} {ELEMENT_TEXT.FOR} {seconds}{" "}
      {ELEMENT_TEXT.SECONDS}
    </div>
  );
};

export default IdleMask;
