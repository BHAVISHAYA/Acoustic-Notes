import "../styles/Header.css";

export const Header = () => {
    return (
        <>
            <div className="container-fluid text-center py-3 header dosis">
                <div className="row text-center justify-content-between align-items-center">
                    <div className="col-9 text-start">
                        <h1 className='px-1 px-md-3'>Acoustic Notes</h1>
                    </div>
                    <div className="col-3 text-end">
                        <i className="fa-solid fa-palette px-1 px-md-3"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
