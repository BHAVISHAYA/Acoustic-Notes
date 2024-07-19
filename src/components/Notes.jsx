import React, { useEffect, useRef, useState } from 'react';
import "../styles/Notes.css";
import { UpdateNote } from './UpdateNote';

export const Notes = (props) => {

    const { gridView, finalNotes, setFinalNotes } = props;

    let category = localStorage.getItem("category");
    if(category !== null)
    category = JSON.parse(category);
    else 
    category = [];

    const [showUpdateDialog, setShowUpdateDialog] = useState(false);
    const [passId, setPassId] = useState(0);
    const [currCateValue, setCurrCateValue] = useState("");
    const [currTitValue, setCurrTitValue] = useState("");
    const [currDesValue, setCurrDesValue] = useState("");
    const [currPriValue, setCurrPriValue] = useState("");

    const [cateArr, setCateArr] = useState(category);
    const [notes, setNotes] = useState(finalNotes);

    useEffect(() => {
        const callMe = () => {
            console.log(finalNotes);
            setNotes(finalNotes);
        }
        callMe();
    }, [notes, finalNotes]);




    //todo -> Handle Favorite and Unfavorite Thing => 
    const addToFavotite = (id) => {
        //* Getting all notes from local Storage 
        let getAllNotes = localStorage.getItem("allNotes");
        if(getAllNotes !== null)
        getAllNotes = JSON.parse(getAllNotes);
        else 
        getAllNotes = [];
        let arr = getAllNotes.map((currELe) => {
            if(id === currELe.id) {
                if(currELe.favorite === true)
                currELe.favorite = false;
                else 
                currELe.favorite = true;
            }
            return currELe;
        })
        localStorage.setItem('allNotes', JSON.stringify(arr));
        let newArr = notes.map((curr) => {
            if(id === curr.id) {
                if(curr.favorite === true) {
                    curr.favorite = false;
                }
                else {
                    curr.favorite = true;
                }
            }
            return curr;
        })
        setFinalNotes(newArr);
    }

    //todo -> Handle Delete Note =>
    const deleteThisNote = (id) => {
        let arr = notes.filter((curr) => {
            return (id !== curr.id);
        })
        setFinalNotes(arr);
        setNotes(arr);

        //* Getting all notes from local Storage 
        let getAllNotes = localStorage.getItem("allNotes");
        if(getAllNotes !== null)
        getAllNotes = JSON.parse(getAllNotes);
        else 
        getAllNotes = [];
        let newArr = getAllNotes.filter((curr) => {
            return (id !== curr.id);
        })
        localStorage.setItem("allNotes", JSON.stringify(newArr));
    }

    const openUpdateDialog = () => {
        setShowUpdateDialog(true);
    }

    const closeUpdateDialog = () => {
        setShowUpdateDialog(false);
    }

    //todo -> Handle Update Note =>
    const updateThisNote = (currNoteId) => {
        console.log(currNoteId);
        let newEditItem = notes.find((currElem) => {
            return (currElem.id === currNoteId);
        })
        console.log(newEditItem);
        setPassId(currNoteId);
        setCurrCateValue(newEditItem.category);
        setCurrTitValue(newEditItem.title);
        setCurrDesValue(newEditItem.description);
        setCurrPriValue(newEditItem.priority);
        openUpdateDialog();
    }

    return (
        <>
            <div className="container-fluid notes dosis">
                <div className="row justify-content-around">
                    {
                        notes.length !== 0 && notes.map((currEle) => {
                            return <>
                                <div className={(gridView === true ? "col-md-3 col-10 note p-4 mx-2 my-4" : "col-10 col-md-11 note p-4 my-4")} key={currEle.id} >                                
                                    {/* ID */}
                                    <h1> <span> ID :</span> {currEle.id} </h1>
                                    
                                    {/* Category */}
                                    <h1 className='py-3'> <span>Category : </span> {currEle.category.toUpperCase()} <span><i className={currEle.favorite === true && "fa-solid fa-star mx-1"}></i></span></h1>
                                    
                                    {/* Title */}
                                    <h2 className='py-3'> <span>Title : </span> {currEle.title} </h2>
                                    
                                    {/* Description */}
                                    <h2 className='py-3'> <span>Description : </span> {currEle.description} </h2>
                                    
                                    {/* Priority */}
                                    <h2 className='py-3'> <span>Priority : </span> {currEle.priority} </h2>
                                    
                                    {/* READ Button */}
                                    <button>READ</button>
                                    
                                    {/* UPDATE Button */}
                                    <button onClick={() => {updateThisNote(currEle.id)}}>UPDATE</button>
                                    
                                    {/* DELETE Button */}
                                    <button onClick={() => {deleteThisNote(currEle.id)}} >DELETE</button>
                                    
                                    {/* ADD TO FAVORITE */}
                                    <button onClick={() => {addToFavotite(currEle.id)}}>  {currEle.favorite ? 'UNFAVORITE' : 'ADD TO FAVORITE'} </button>
                                </div>
                            </>
                        }) 
                    }
                </div>
            </div>  
            {
                showUpdateDialog && 
                <UpdateNote 
                    closeUpdateDialog={closeUpdateDialog} 
                    cateArr={cateArr} 
                    setCateArr={setCateArr} 
                    passId={passId} 
                    currCateValue={currCateValue}
                    currTitValue={currTitValue}
                    currDesValue={currDesValue}
                    currPriValue={currPriValue}

                    finalNotes={finalNotes}
                    setFinalNotes={setFinalNotes}
                />
            }
        </>
    )
}