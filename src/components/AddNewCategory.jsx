import { useState } from "react";

export const AddNewCategory = (props) => {

    //* Destructuring the props -> 
    const { categoryArray, setCategoryArray, setShowBox, setSelectBoxValue } = props;

    const styleInputs = {
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "#303C6C",
    }

    const [newCategory, setNewCategory] = useState("");

    const handleNewCategory = (event) => {
        setNewCategory(event.target.value);
    }

    const addCategory = () => {
        if(newCategory === "") alert("Please specify any category...");
        else {
            if(categoryArray.includes(newCategory.toLowerCase()) === true) alert("Category already exist");
            else {
                setCategoryArray([...categoryArray, newCategory.toLowerCase()]);
                localStorage.setItem("category", JSON.stringify([...categoryArray, newCategory.toLowerCase()]));
                setShowBox(false);
                setSelectBoxValue(newCategory);
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