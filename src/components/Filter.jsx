import React, { useState } from 'react';
import "../styles/InputDialog.css";

export const Filter = (props) => {
    
    //* Destructuring the props 
    const { closeFilterBox, setFinalNotes } = props;

    //* Adding Style to the select tag 
    const styleInputs = {
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "var(--color_2)",
    }

    const [filterValue, setFilterValue] = useState("Select Filter Type");
    const [categoryValue, setCategoryValue] = useState("Select Category");
    const [showCategories, setShowCategories] = useState(false);


    //* Getting categories from local storage 
    let category = localStorage.getItem("category");
    if(category !== null)
    category = JSON.parse(category);
    else 
    category = [];


    const handleFilterValue = (event) => {
        if(event.target.value === "Category") {
            setShowCategories(true);
            setFilterValue(event.target.value);
        }
        else {
            setShowCategories(false);
            setFilterValue(event.target.value);
        }
    }

    const handleCategoryValue = (event) => {
        setCategoryValue(event.target.value);
    }

    const generateNewArray = () => {

        //* Getting all notes from local Storage 
        let getAllNotes = localStorage.getItem("allNotes");
        if(getAllNotes !== null)
        getAllNotes = JSON.parse(getAllNotes);
        else 
        getAllNotes = [];

        //* All 
        if(filterValue === "All") {
            console.log("All");
            setFinalNotes(getAllNotes);
            closeFilterBox();
        }

        //* Favorite 
        else if(filterValue === "Favorite") {
            console.log("Favorite");
            let newArr = getAllNotes.filter((curr) => {
                return (curr.favorite === true);
            })
            setFinalNotes(newArr);
            closeFilterBox();
        }

        //* Category
        else if(filterValue === "Category") {
            if(categoryValue === "Select Category") alert("Please Select Category");
            else {
                let newArr = getAllNotes.filter((curr) => {
                    return (curr.category.toLowerCase() === categoryValue.toLowerCase());
                }) 
                setFinalNotes(newArr);
                closeFilterBox();
            }
        }

        else {
            alert("Please Select any one filter type....");
        }
    }
    
    return (
        <>
            <div className="container-fluid dialog-wrapper"></div>
            <div className="container-fluid inputDialog">
                <div className="row text-center justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-8 col-10 mx-sm-0 mx-4 py-4 px-md-5 px-sm-3 px-3">
                        <button className='mb-4 d-flex py-1 px-3' onClick={closeFilterBox}>X</button>
 
                        <select style={styleInputs} className='form-select mt-5' value={filterValue} onChange={handleFilterValue}>
                            <option value="Select Filter Type" selected disabled>Select Filter Type</option>
                            <option value="All">All</option>
                            <option value="Favorite">Favorite</option>
                            { category.length > 0 && <option value="Category">Category</option> }
                        </select>

                        {
                            showCategories && 
                            <select style={styleInputs} className='form-select mt-4' value={categoryValue} onChange={handleCategoryValue}>
                                <option value="Select Category" selected disabled>Select Category</option>
                                {
                                    category.length > 0 && category.map((currCate, index) => {
                                        return (
                                            <>
                                                <option value={currCate} key={index}> {currCate} </option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                        }
                        
                        {/* Filter Button */}
                        <button onClick={generateNewArray} className='mt-5'> Filter </button>
                    </div>
                </div>
            </div>
        </>
    )
}
