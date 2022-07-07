import React, { useState } from "react";


export default function InputField(props:any) {
    const options : string[] = ["TODO", "DOING", "DONE"];
    const {title, description, status, children, refT, refS, refD, value1, value2, Status} = props;
    const [bgColor, setBgColor] = useState<string>("green");
    let styles = {
        bg : {
            backgroundColor : bgColor
        },
        color : {
            color : bgColor
        }
    }
    function handlebg(e:any) {
        if(e.target.value === "TODO"){
            setBgColor("green")
        }
        if(e.target.value === "DOING"){
            setBgColor("orange")
        }
        if(e.target.value === "DONE"){
            setBgColor("red")
        }
    }
    
    return(
        <>
            <div className="container1" >
                <div className="animate">
                {children}
                    <h1>Project</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">{title} : </label>
                            <input type="text" name="" id="" value={value1} ref={refT}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{description} : </label>
                            <input type="text" name="" id="" value={value2} ref={refD}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">{status} : </label>
                            <div id="customer-select">
                                <select style={styles.bg} onChange={handlebg} ref={refS} >
                                    <option value={Status}>{Status}</option>
                                    {
                                        options.map((elt, k)=>(
                                            <option value={elt} key={k}>{elt}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}