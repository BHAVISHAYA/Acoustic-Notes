import React from 'react';
import { AddNewCategory } from './AddNewCategory';

export const InputDialogData = (props) => {

    const { closeDialog, selectBoxValue, titleValue, descValue, priorityValue,  handleInput, categoryArray, setCategoryArray, showBox, setShowBox, setSelectBoxValue, showNotes } = props;
    
    //* Adding Style to the select tag 
    const styleInputs = {
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "var(--color_3)",
    }
    
    return (
        <>
            <div className="container-fluid dialog-wrapper"></div>
            <div className="container-fluid inputDialog">
                <div className="row text-center justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-8 col-10 mx-sm-0 mx-4 py-4 px-md-5 px-sm-3 px-3">
                        <button className='mb-4 d-flex py-1 px-3' onClick={closeDialog}>X</button>
                        
                        {/* Select Category */}
                        <select style={styleInputs} className='form-select' value={selectBoxValue} onChange={handleInput} name="Category">
                            <option value="Choose Category">Choose Category</option>
                            <option value="Add Category">Add Category</option>
                            {
                                categoryArray.map((currELe, index) => (
                                    <option value={currELe} key={index} id={index}> {currELe.toUpperCase()} </option>
                                ))
                            }
                        </select>
                        { showBox && <AddNewCategory categoryArray={categoryArray} setCategoryArray={setCategoryArray} setShowBox={setShowBox} setSelectBoxValue={setSelectBoxValue} /> }
                        
                        {/* Add Title */}
                        <input style={styleInputs} className='form-control my-4' type="text" placeholder='Add Title' value={titleValue} onChange={handleInput} name='Title' />
                        
                        {/* Add Description */}
                        <textarea style={styleInputs} className='form-control mb-4' placeholder='Add Description' rows="5" cols="50" value={descValue} onChange={handleInput} name='Description' />
                        
                        {/* Add Priority */}
                        <input style={styleInputs} className='form-control mb-4' type="number" min={1} placeholder='Set Priority' value={priorityValue} onChange={handleInput} name='Priority' />
                        
                        {/* Add Note Button */}
                        <button onClick={showNotes}> Add Note </button>
                    </div>
                </div>
            </div>
        </>
    )
}
