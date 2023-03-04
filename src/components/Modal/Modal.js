import classes from '../Modal/Modal.module.css'
const Modal = ({ children, handleShow }) => {
    return (
        <>
            <div onClick={handleShow} className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button className={classes.button} onClick={handleShow} >x</button>
                {children}

            </div>

        </>
    )
}

export default Modal