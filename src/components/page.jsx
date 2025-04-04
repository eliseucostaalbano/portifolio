import React, { forwardRef } from "react";

const Pagina = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
    <h1>Cabeçalho</h1>
      <p>{props.children}</p>
      <p>
        Numero Pagina: {props.number}
      </p>
    </div>
  );
});

export default Pagina;