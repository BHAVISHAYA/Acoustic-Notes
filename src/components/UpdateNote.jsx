import React, { useState } from 'react';
import "../styles/InputDialog.css";
import { AddNewUpdatedCategory } from './AddNewUpdatedCategory';

export const UpdateNote = (props) => {
    
    //* De-structuring the props 
    const { closeUpdateDialog, cateArr, setCateArr, passId, currCateValue, currTitValue, currDesValue, currPriValue } = props;

    //* Use State 
    const [show, setShow] = useState(false);
    const [cateValue, setCateValue] = useState(currCateValue);
    const [titValue, setTitValue] = useState(currTitValue);
    const [desValue, setDesValue] = useState(currDesValue);
    const [priValue, setPriValue] = useState(currPriValue);

    //* Adding Style to the select tag 
    const styleInputs = {
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "var(--color_3)",
    }

    //* Getting original note Array from local storage 
    let getAllNotes = localStorage.getItem("allNotes");
    if(getAllNotes !== null)
    getAllNotes = JSON.parse(getAllNotes);
    else 
    getAllNotes = [];

    //* Making useState for the above note array 
    const [allArray, setAllArray] = useState(getAllNotes);


    const handleInput = (event) => {
        const { name, value } = event.target;
        if(name === "Category") {
            if(value === "Add Category") {
                setShow(!show);
            } 
            else {
                setShow(false);
                setCateValue(value);
            }
        } 
        else if(name === "Title") {
            setTitValue(value);
        } 
        else if(name === "Description") {
            setDesValue(value);
        } 
        else if(name === "Priority") {
            setPriValue(value);
        }
    }

    const showNotes = () => {
        if(cateValue === "Choose Category" || titValue === "" || desValue === "" || priValue === "") {
            alert("Please fill all the fields");
        }
        else {
            let dupArr = [];
            dupArr = allArray.map((currNote) => {
                if(currNote.id === passId) {
                    currNote.category = cateValue;
                    currNote.title = titValue;
                    currNote.description = desValue;
                    currNote.priority = priValue;
                }
                return currNote;
            })
            localStorage.setItem("allNotes", JSON.stringify(dupArr));
            closeUpdateDialog();
        }
    }
    
    return (
        <>
            <div className="container-fluid dialog-wrapper"></div>
            <div className="container-fluid inputDialog">
                <div className="row text-center justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-8 col-10 mx-sm-0 mx-4 py-4 px-md-5 px-sm-3 px-3">
                        <button className='mb-4 d-flex py-1 px-3' onClick={closeUpdateDialog}>X</button>
                        
                        {/* Select Category */}
                        <select style={styleInputs} className='form-select' name="Category" value={cateValue} onChange={handleInput}>
                            <option value="Choose Category">Choose Category</option>
                            <option value="Add Category">Add Category</option>
                            {
                                cateArr.map((currELe, index) => (
                                    <option value={currELe} key={index} id={index}> {currELe.toUpperCase()} </option>
                                ))
                            }
                        </select>
                        { show && <AddNewUpdatedCategory cateArr={cateArr} setCateArr={setCateArr} setShow={setShow} setCateValue={setCateValue} /> } 
                        
                        {/* Add Title */}
                        <input style={styleInputs} className='form-control my-4' type="text" placeholder='Add Title' name='Title' value={titValue} onChange={handleInput} />
                        
                        {/* Add Description */}
                        <textarea style={styleInputs} className='form-control mb-4' placeholder='Add Description' rows="5" cols="50" name='Description' value={desValue} onChange={handleInput} />
                        
                        {/* Add Priority */}
                        <input style={styleInputs} className='form-control mb-4' type="number" min={1} placeholder='Set Priority' name='Priority' value={priValue} onChange={handleInput} />
                        
                        {/* Update Note Button */}
                        <button onClick={showNotes}> Update Note </button>
                    </div>
                </div>
            </div>
        </>
    );
}
