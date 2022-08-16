import { useState } from "react";

function Check() {
  const [check, setCheck] = useState(true);

  function handleCheck() {
    setCheck(!check);
  }

  return <input type="checkbox" checked={check} onChange={handleCheck} />;
}
export default Check;
