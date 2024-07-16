import React, { useEffect, useState } from 'react';
import "../styles/Notes.css";
import { InputDialog } from '../components/InputDialog.jsx';

export const Notes = (props) => {

    const {gridView, openDialog, closeDialog, random, setRandom } = props;
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


    //todo -> Handle Favorite and Unfavorite Thing => 
    let DuplicateArray = [];
    const addToFavotite = (id) => {
        DuplicateArray = notes.map((currELe) => {
            if(id === currELe.id) {
                if(currELe.favorite === true)
                currELe.favorite = false;
                else 
                currELe.favorite = true;
            }
            return currELe;
        })
        localStorage.setItem('allNotes', JSON.stringify(DuplicateArray));
        setNotes(DuplicateArray);
    }

    //todo -> Handle Delete Note =>
    const deleteThisNote = (id) => {
        DuplicateArray = notes.filter((curr) => {
            return (id !== curr.id);
        })
        localStorage.setItem("allNotes", JSON.stringify(DuplicateArray));
        setNotes(DuplicateArray);
    }

    //todo -> Handle Update Note =>
    const updateThisNote = (currNoteId) => {
        console.log(currNoteId);
        let newEditItem = notes.find((currElem) => {
            return (currElem.id === currNoteId);
        })
        console.log(newEditItem);
        openDialog();
    }

    return (
        <>
            <div className="container-fluid notes dosis">
                <div className="row justify-content-around">
                    {
                        notes.map((currEle, index) => {
                            return <>
                                <div className={(gridView === true ? "col-md-3 col-10 note p-4 mx-2 my-4" : "col-10 col-md-11 note p-4 my-4")} key={currEle.id} >                                
                                    {/* ID */}
                                    <h1> <span> ID :</span> {currEle.id} </h1>
                                    
                                    {/* Category */}
                                    <h1 className='py-3'> <span>Category : </span> {currEle.category} <span><i className={currEle.favorite === true && "fa-solid fa-star mx-1"}></i></span></h1>
                                    
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
        </>
    )
}
