import {useState} from 'react'
import HomePage from './Pages/HomePage/HomePage'
import TarotInformations from './Pages/TarotInformations/TarotInformations'

const App = () => {
  const [current, setCurrent] = useState('home')
  

  const changePage = (page)=>{
    setCurrent(page)
  }

  const renderPage = ()=>{
    switch(current){
      case 'home':
        return<HomePage changePage={changePage}/>
      case 'intro':
        return<TarotInformations changePage={changePage} />
    }
  }  

  return<div>{renderPage()}</div>
}

export default App;