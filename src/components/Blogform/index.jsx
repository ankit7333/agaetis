import { useState } from 'react'
import styles from './blogform.module.scss'
import modal from '../../styles/modal.module.scss'

export default function Blogform({
    handleIsOpen,
    handleClose,
    inputValue ,
    setInputValue,
    error1,
    error2,
    error3,
    error4,
    setError1,
    setError2,
    setError3,
    setError4,
    handleInputChange,
    handleValidation,
    handleSubmit,
}) {
    // const [inputValue, setInputValue] = useState({
    //     blogheading : '',
    //     blogauthor : '',
    //     blogdate : '',
    //     blogcontent : '',
    // });
    // const [error1, setError1] = useState(false);
    // const [error2, setError2] = useState(false);
    // const [error3, setError3] = useState(false);
    // const [error4, setError4] = useState(false);
    // const handleInputChange = (e) => {
    //     const {name,value} = e.target;
    //     setInputValue(prevValue => ({
    //         ...prevValue,
    //         [name]: value,
    //     }));
    //     console.log(name,value);
    // };
    // const handleValidation = () => {
    //     let isError = false
    //     if(inputValue.blogheading.trim() === ''){
    //         console.log("1")
    //         setError1(true)
    //         isError = true
    //     }else{
    //         setError1(false)
    //         isError = false
    //         inputValue.blogheading = ''
    //     }
    //     if(inputValue.blogauthor.trim() === ''){
    //         setError2(true)
    //         isError = true
    //     }else{
    //         setError2(false)
    //         isError = false
    //         inputValue.blogauthor = ''
    //     }
    //     if(inputValue.blogdate.trim() === ''){
    //         setError3(true)
    //         isError = true
    //     }else{
    //         setError3(false)
    //         isError = false
    //         inputValue.blogdate = ''
    //     }
    //     if(inputValue.blogcontent.trim() === ''){
    //         setError4(true)
    //         isError = true
    //     }else{
    //         setError4(false)
    //         isError = false
    //         inputValue.blogcontent = ''
    //     }
    //     if(!isError){
    //         handleClose();
    //         isError = false
    //     }
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleValidation();
    // }
    return(
        <div className={`${modal.modal__overlay} ${handleIsOpen ? `${modal.show}` : ''}`}>
            <form onSubmit={handleSubmit} className={`${modal.modal} ${styles.form}`}>
                <div className={`${modal.modal__header}`}>
                    <button type="button" onClick={() => {
                                    setError1(false)
                                    setError2(false)
                                    setError3(false)
                                    setError4(false)      
                                    handleClose()                  
                    }} className={`icon button closeicon`}>&#10006;</button>
                </div>
                <div className={`${modal.modal__body}`}>
                    <div className={`${styles.inputwrap}`}>
                        <label>Heading</label>
                        <input className={`${error1 ? `${styles.error}` : ''}`} type="text" name='blogheading' value={inputValue.blogheading} onChange={handleInputChange} />
                        {error1 && <p>Please fill this field</p>}
                    </div>
                    <div className={`${styles.inputwrap}`}>
                        <label>Author</label>
                        <input className={`${error2 ? `${styles.error}` : ''}`} type="text" name='blogauthor' value={inputValue.blogauthor} onChange={handleInputChange} />
                        {error2 && <p>Please fill this field</p>}
                    </div>
                    <div className={`${styles.inputwrap}`}>
                        <label>Date</label>
                        <input className={`${error3 ? `${styles.error}` : ''}`} type="date" name='blogdate' value={inputValue.blogdate} onChange={handleInputChange} />
                        {error3 && <p>Please fill this field</p>}
                    </div>
                    <div className={`${styles.inputwrap}`}>
                        <label>Paragraph</label>
                        <textarea className={`${error4 ? `${styles.error}` : ''}`} type="text" name='blogcontent' value={inputValue.blogcontent} onChange={handleInputChange}></textarea>
                        {error4 && <p>Please fill this field</p>}
                    </div>
                </div>
                <div className={`${modal.modal__footer}`}>
                    <button type="submit" className="button button__primary">Submit</button>
                </div>
                {/* <p>{inputValue.blogheading}</p> */}
                {/* <p>{inputValue.blogauthor}</p> */}
                {/* <p>{dateFormatted == "Invalid Date" ? "" : dateFormatted}</p> */}
                {/* <p>{inputValue.blogcontent}</p> */}
            </form>
        </div>
    )
}