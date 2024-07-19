import { useState } from 'react';
import "../styles/InputDialog.css";
import { InputDialogData } from './InputDialogData';

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

    const { closeDialog, random, setRandom, finalNotes, setFinalNotes } = props;

    const [noteArray, setNoteArray] = useState(getAllNotes);
    const [showBox, setShowBox] = useState(false);
    const [categoryArray, setCategoryArray] = useState(category);
    const [selectBoxValue, setSelectBoxValue] = useState("Choose Category");
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
                favorite : false,
            }
            noteArray.push(updatedNote);
            localStorage.setItem("allNotes", JSON.stringify([...noteArray]));
            closeDialog();
            let getArr = localStorage.getItem("allNotes");
            getArr = JSON.parse(getArr);
            setFinalNotes(getArr);
            setRandom(!random);
        }
    }

    return (
        <>  
            <InputDialogData 
                closeDialog={closeDialog}
                selectBoxValue={selectBoxValue}
                titleValue={titleValue}
                descValue={descValue}
                priorityValue={priorityValue}
                handleInput={handleInput}
                categoryArray={categoryArray}
                setCategoryArray={setCategoryArray}
                showBox={showBox}
                setShowBox={setShowBox}
                setSelectBoxValue={setSelectBoxValue}
                showNotes={showNotes}
            />
        </>
    )
}