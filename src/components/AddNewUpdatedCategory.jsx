import { useState } from "react";

export const AddNewUpdatedCategory = (props) => {

    //* Destructuring the props -> 
    const { cateArr, setCateArr, setShow, setCateValue } = props;

    const styleInputs = {
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "var(--color_2)",
    }

    const [newCategory, setNewCategory] = useState("");

    const handleNewCategory = (event) => {
        setNewCategory(event.target.value);
    }

    const addCategory = () => {
        if(newCategory === "") alert("Please specify any category...");
        else {
            if(cateArr.includes(newCategory.toLowerCase()) === true) alert("Category already exist");
            else {
                setCateValue(newCategory);
                setCateArr([...cateArr, newCategory.toLowerCase()]);
                localStorage.setItem("category", JSON.stringify([...cateArr, newCategory.toLowerCase()]));
                setShow(false);
            }
        }
    }
    
    return (
        <>
            <input 
                style={styleInputs} 
                className='form-control my-4' 
                type="text" 
                placeholder="Enter Category"
                name="NEW_CAT" 
                value={newCategory}
                onChange={handleNewCategory}
            /> 
            <button onClick={addCategory}> Create Category </button>
        </>
    );
}