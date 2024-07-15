import { useState } from 'react';
import "../styles/InputDialog.css";
import { AddNewCategory } from './AddNewCategory';


export const InputDialog = (props) => {
    
    let category = localStorage.getItem("category");
    if(category !== null)
    category = JSON.parse(category);
    else 
    category = [];

    let getAllNotes = localStorage.getItem("allNotes");
    if(getAllNotes !== null)
    getAllNotes = JSON.parse(getAllNotes);
    else 
    getAllNotes = [];

    const { closeDialog, random, setRandom } = props;

    const styleInputs = {
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "var(--color_3)",
    }

    const [noteArray, setNoteArray] = useState(getAllNotes);
    const [showBox, setShowBox] = useState(false);
    const [categoryArray, setCategoryArray] = useState(category);


    const [selectBoxValue, setSelectBoxValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [descValue, setDescValue] = useState("");
    const [priorityValue, setPriorityValue] = useState("");

    const handleInput = (event) => {
        const { name, value } = event.target;
        if(name === "Category") {
            if(value === "Add Category") {
                setShowBox(!showBox);
            } 
            else {
                setShowBox(false);
                setSelectBoxValue(value);
            }
        } 
        else if(name === "Title") {
            setTitleValue(value);
        } 
        else if(name === "Description") {
            setDescValue(value);
        } 
        else if(name === "Priority") {
            setPriorityValue(value);
        }
    }


    const showNotes = () => {
        if(selectBoxValue === "Choose Category" || titleValue === "" || descValue === "" || priorityValue === "") {
            alert("Please fill all the fields");
        }
        else {
            let updatedNote = {
                id : new Date().getTime(), 
                category : selectBoxValue, 
                title : titleValue, 
                description : descValue, 
                priority : priorityValue,
            }
            noteArray.push(updatedNote);
            localStorage.setItem("allNotes", JSON.stringify([...noteArray]));
            closeDialog();
            setRandom(!random);
        }
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
                        <button onClick={showNotes}>Add Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}
