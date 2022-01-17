import React from "react";
import EditBooks from "./EditBooks";
import MobileEdit from "./MobileEdit";
import "../../App.css";
import { useParams } from "react-router";
import useDimentions from "../customHooks/useDimentions";
import Edit from './Edit';


function EditItems(props) {
  const [{ width, height }] = useDimentions();
  console.log("dimentions", width, height);
  const id = useParams();
  return (
    <>
      <div id="animate-area">
        {width < 568 ? 
        // <MobileEdit id={id.id} /> 
        <Edit id={id.id}
        render={(state,onSubmit,cancel,handleChange)=>(
          <MobileEdit state={state} onSubmit={onSubmit} handleChange={handleChange}/>
        )} />
        : 
        <EditBooks id={id.id} />
      
        }
      </div>
    </>
  );
}
export default EditItems;
