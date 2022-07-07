import React, { useRef, useState } from "react";
import InputField from "./Inputfield";



export default function Content(props:any) {
    const {title, description, date, className, status, handleUpdate, handleRemove} = props;
    const [show , setShow] = useState<boolean>(false);
    const refStatus = useRef<any>(null);


    function close() {
        setShow(false);
    }

    function handleUpdated(e:any) {
        e.preventDefault();
        close();
        let item : {title:string, description:string, date: string, status : string} = {
            title : title,
            description : description,
            status : refStatus.current.value,
            date : new Date().toLocaleDateString()
        }
        handleUpdate(item);
    }
    function handleDelete(e:any) {
        e.preventDefault();
        close();
        let item : {title:string, description:string, date: string, status : string} = {
            title : title,
            description : description,
            status : refStatus.current.value,
            date : new Date().toLocaleDateString()
        }
        handleRemove(item);
    }

    return(
        <>
            {
                show && <InputField title="Titre" description="Description" status="Status" refS={refStatus} value1 = {title} value2 = {description} Status={status}>
                    <button type="submit" id="close" onClick={handleUpdated}>UPDATE</button>
                    <button type="submit" id="close2" onClick={handleDelete}>REMOVE</button>
                    <span onClick={close} className="closex" title="Close Modal">&times;</span>
                </InputField>
            }
            <div className="content" onClick={()=>setShow(true)}>
            <h2 className={className}>Title : {title}</h2>
            <p>Description : {description}</p>
            <p>Date : {date}</p>
            </div>
        </>
    )
}