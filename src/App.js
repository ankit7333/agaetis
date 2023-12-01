import {useState} from 'react'
import './styles/globals.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import Firepost from './components/Firepost'
import Blog from './components/Blog'
import About from './components/About'
import Archives from './components/Archives'
import Elsewhere from './components/Elsewhere'
import Footer from './components/Footer'
import Blogform from './components/Blogform'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isArticle, setIsArticle] = useState(false);
  const [isMultipleArticle, setIsMultipleArticle] = useState([{}]);
  const handleShow = () => {
    setIsOpen(prev => !prev);
    console.log(isOpen);
    if(!isOpen === true){
      setInputValue({
        blogheading : '',
        blogauthor : '',
        blogdate : '',
        blogcontent : '',
      })
    }
  }
  const [inputValue, setInputValue] = useState({
    blogheading : '',
    blogauthor : '',
    blogdate : '',
    blogcontent : '',
  });
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);

  const handleMultipleArticle = () => {

    let array=[]
    
    array = [...array,inputValue];
    // array.push(...array,inputValue)
    
    console.log('array',array);
    setIsMultipleArticle(array);
    // setIsMultipleArticle(prev => [...prev, {inputValue}])
  }

console.log('app',inputValue)

  const handleInputChange = (e) => {
      const {name,value} = e.target;
      setInputValue(prevValue => ({
          ...prevValue,
          [name]: value,
      }));
      console.log(name,value);
  };
  const handleValidation = () => {
      let isError = false
      if(inputValue.blogheading.trim() === ''){
          console.log("1")
          setError1(true)
          isError = true
      }else{
          setError1(false)
          isError = false
      }
      if(inputValue.blogauthor.trim() === ''){
          setError2(true)
          isError = true
      }else{
          setError2(false)
          isError = false
      }
      if(inputValue.blogdate.trim() === ''){
          setError3(true)
          isError = true
      }else{
          setError3(false)
          isError = false
      }
      if(inputValue.blogcontent.trim() === ''){
          setError4(true)
          isError = true
      }else{
          setError4(false)
          isError = false
      }
      if(!isError){
          handleShow();
          isError = false
      }
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      handleValidation();
      setIsArticle(true);
      handleMultipleArticle()
  }
  return (
    <div className={`main`}>
      <Header handleShowClick={handleShow} />
      <div className={`main__inner`}>
        <Banner />
        <Firepost />
        <section className={`container container__flex`}>
          <div className={`container__left`}>
            <Blog 
              inputValue={inputValue} 
              isArticle={isArticle}
              isMultipleArticle={isMultipleArticle}
            />
          </div>
          <div className={`container__right`}>
            <About />
            <Archives />
            <Elsewhere />
          </div>
        </section>
      </div>
      <Footer />
      <Blogform 
        handleClose={handleShow} 
        handleIsOpen={isOpen} 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        error1={error1}
        error2={error2}
        error3={error3}
        error4={error4}
        setError1={setError1}
        setError2={setError2}
        setError3={setError3}
        setError4={setError4}
        handleInputChange={handleInputChange}
        handleValidation={handleValidation}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
