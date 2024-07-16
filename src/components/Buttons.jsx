import { useEffect, useState } from 'react';
import "../styles/Buttons.css";
import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import FilterListIcon from '@mui/icons-material/FilterList';
import { InputDialog } from './InputDialog';
import { Notes } from './Notes';

export const Buttons = () => {

    const [Icon, setIcon] = useState(WindowIcon);
    const [showDialog, setShowDialog] = useState(false);
    const [gridView, setGridView] = useState(true);
    const [random, setRandom] = useState(true);

    useEffect(() => {
        console.log("Jai Shree Ram");
    }, [random]);


    const changeIcon = () => {
        if(Icon === WindowIcon) {
            setIcon(ViewListIcon);
            setGridView(false);
        }
        else {
            setIcon(WindowIcon);
            setGridView(true);
        }
    }

    const openDialog = () => {
        setShowDialog(true);
    }
    const closeDialog = () => {
        setShowDialog(false);
    }
     
    return (
        <>
            <div className="container-fluid buttons py-5 dosis">
                <div className="row text-center justify-content-around">
                    <div className="col-lg-3 col-sm-6 add-note-btn my-2">
                        <button onClick={openDialog}>
                            Add Note
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div className="col-lg-3 col-sm-6 sort my-2">
                        <button>
                            Sort Priority
                            <i className="fa-solid fa-arrow-up-9-1"></i>
                        </button>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-2">
                        <button>
                            Filter
                            <FilterListIcon className='filterIcon' style={{fontSize : "2.5rem", padding : "0.3rem"}} />
                        </button>
                    </div>
                    <div className="grid col-lg-3 col-sm-6 my-2 d-flex justify-content-center align-items-center">
                        <span className='gridStyle d-flex' onClick={changeIcon}>
                            <Icon style={{fontSize : "3rem"}}/>
                        </span>
                    </div>
                </div>                
            </div>
            {
                showDialog && <InputDialog 
                closeDialog={closeDialog} 
                random={random} 
                setRandom={setRandom}  
            /> 
            }
            <Notes gridView={gridView} />
        </>     
    )
}
