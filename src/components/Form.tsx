import React, { useContext, useRef, useState } from "react";
import Card from "./Card";
import Content from "./Content";
import InputField from "./Inputfield";


export const Form : React.FC<any> = () =>{
    const [todoData, setTodoData] = useState< {title:string, description:string, date: string, status : string}[]>([])
    const [doingData, setDoingData] = useState< {title:string, description:string, date: string, status : string}[]>([])
    const [doneData, setDoneData] = useState< {title:string, description:string, date: string, status : string}[]>([])
    const refTitle = useRef<any>(null);
    const refDesc = useRef<any>(null);
    const refStatus = useRef<any>(null);
    const [show, setShow] = useState<boolean>(false);
    
    function handleUpdate(item:any) {
        if(item.status === "TODO"){
            const filterData1 = doingData.filter(elt => elt.title != item.title);
            setDoingData(filterData1);
            const filterData2 = doneData.filter(elt => elt.title != item.title);
            setDoneData(filterData2);
            setTodoData(prevState => {
                return [...prevState, item]
            })
        }
        else if(item.status === "DOING"){
            const filterData1 = todoData.filter(elt => elt.title != item.title);
            setTodoData(filterData1);
            const filterData2 = doneData.filter(elt => elt.title != item.title);
            setDoneData(filterData2);
            setDoingData(prevState => {
                return [...prevState, item]
            })
        }
        else if(item.status === "DONE"){
            const filterData1 = doingData.filter(elt => elt.title != item.title);
            setDoingData(filterData1);
            const filterData2 = todoData.filter(elt => elt.title != item.title);
            setTodoData(filterData2);
            setDoneData(prevState => {
                return [...prevState, item]
            })
        }
    }  
    
    function handleRemove(item:any) {
        if(item.status === "TODO"){
            const filterData = todoData.filter(elt => elt.title != item.title);
            setTodoData(filterData);
        }
        else if(item.status === "DOING"){
            const filterData = doingData.filter(elt => elt.title != item.title);
            setDoingData(filterData);
        }
        else if(item.status === "DONE"){
            const filterData = doneData.filter(elt => elt.title != item.title);
            setDoneData(filterData);
        }
    }

    function handleChange(e:any) {
        e.preventDefault();
        setShow(false)
        let item : {title:string, description:string, date: string, status : string} = {
            title : refTitle.current.value,
            description : refDesc.current.value,
            status : refStatus.current.value,
            date : new Date().toLocaleDateString()
        }
        
        console.log(item);
        
        if(item.status === "TODO"){
            setTodoData(prevState => {
                return [...prevState, item]
            })

            console.log(todoData);
            
        }
        else if(item.status === "DOING"){
            setDoingData(prevState => {
                return [...prevState, item]
            })
        }
        else if(item.status === "DONE"){
            setDoneData(prevState => {
                return [...prevState, item]
            })
        }
    }
    
    function displayWindow() {
        setShow(true);
    }
    function close() {
        setShow(false)
    }
    return(
        <>
            {
                show && <InputField title="Title" description="Description" status="Status" refT={refTitle} refS={refStatus} refD={refDesc} Status = "STATUS">
                    <button type="submit" id="close" onClick={handleChange}>CREATE</button>
                    <span onClick={close} className="closex" title="Close Modal">&times;</span>
                </InputField>
            }
            
            <button className="close" onClick={displayWindow}>NEW PROJECT</button>
            <div className='container'>
                <Card title="TODO" >
                    {
                        todoData.map((elt, k)=>(
                            <Content handleUpdate={handleUpdate} handleRemove={handleRemove} key={k} title = {elt.title} description = {elt.description} date = {elt.date} className="TODO" status={elt.status}/>
                        ))
                    }
                </Card>
                <Card title="DOING">
                {
                        doingData.map((elt, k)=>(
                            <Content handleUpdate={handleUpdate} handleRemove={handleRemove} key={k} title = {elt.title} description = {elt.description} date = {elt.date} className="DOING" status={elt.status}/>
                        ))
                }
                </Card>
                <Card title="DONE">
                    {
                        doneData.map((elt, k)=>(
                            <Content handleUpdate={handleUpdate} handleRemove={handleRemove} key={k} title = {elt.title} description = {elt.description} date = {elt.date} className="DONE" status={elt.status}/>
                        ))
                    }
                </Card>
            </div>
        </>
    )
}

export default Form;