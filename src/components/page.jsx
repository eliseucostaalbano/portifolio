import React, { forwardRef } from "react";

const Pagina = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <div className="h-full">{props.children}</div>
      <p className="text-xs text-end text-black pb-4">Numero Pagina: {props.number}</p>
    </div>
  );
});

export default Pagina;