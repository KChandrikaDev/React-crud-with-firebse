import React from "react";
import MobileAddBooks from "./MobileAddBooks";
import AddBooks from "./AddBooks";
import useDimentions from "../../customHooks/useDimentions";
import Add from "./Add";

function Books(props) {
  const [{ width, height }] = useDimentions();
  console.log("dimentions", width, height);

  return (
    <>
      <div id="animate-area">
        {width <= 768 ? 
        // <MobileAddBooks /> 
        <Add render={(state,onSubmit,cancel,handleChange)=>(
          <MobileAddBooks state={state} onSubmit={onSubmit} cancel={cancel} handleChange={handleChange}/>
        )} />
        : 
        // <AddBooks />
        <Add render={(state,onSubmit,cancel,handleChange)=>(
          <AddBooks state={state} onSubmit={onSubmit} cancel={cancel} handleChange={handleChange}/>
        )} />
        }
      </div>
    </>
  );
}
export default Books;
