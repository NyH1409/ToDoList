import React, { useRef, useState } from "react";
import Form from "./Form";
import InputField from "./Inputfield";


export default function Card(props:any) {
  const {children, title} = props;
  
    return(
      <>
        <div className="card">
            <div className={title}>{title}</div>
            <div>
                {children}
            </div>
        </div>
      </>
    )
}