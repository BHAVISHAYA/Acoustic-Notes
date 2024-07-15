import React, { useEffect, useState } from 'react';
import "../styles/Notes.css";

export const Notes = (props) => {

    const {gridView } = props;
    const [notes, setNotes] = useState([]);
    
    let  myNotes = [];
    useEffect(() => {
        const callMe = () => {
            myNotes = localStorage.getItem("allNotes");
            if(myNotes !== null) { 
                myNotes = JSON.parse(myNotes);
                setNotes(myNotes);
            }
        }
        callMe();
    }, [myNotes]);

    const deleteThisNote = (id) => {
        console.log(id);
    }

    return (
        <>
            <div className="container-fluid notes dosis">
                <div className="row justify-content-around">
                    {
                        notes.map((currEle, index) => {
                            return <>
                                <div className={(gridView === true ? "col-md-3 col-10 note p-4 mx-2 my-3" : "col-10 col-md-11 note p-4 my-3")} key={currEle.id} >                                
                                    <h1> <span> ID :</span> {currEle.id} </h1>
                                    <h1> <span>Category : </span> {currEle.category} <span><i className="fa-regular fa-star mx-1"></i></span></h1>
                                    <h2 className='py-3'> <span>Title : </span> {currEle.title} </h2>
                                    <h2 className='py-3'> <span>Description : </span> {currEle.description} </h2>
                                    <h2 className='py-3'> <span>Priority : </span> {currEle.priority} </h2>
                                    <button>READ</button>
                                    <button>UPDATE</button>
                                    <button onClick={() => {deleteThisNote(currEle.id)}} >DELETE</button>
                                </div>
                            </>
                        }) 
                    }
                </div>
            </div>  
        </>
    )
}
