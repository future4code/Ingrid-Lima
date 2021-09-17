import {useState, useEffect} from 'react'
import TarotCards from '../../Components/TarotCards'
import axios from 'axios'
import '../../App.css'


const TarotInformations = (props)=>{
	const [cards, setCards] = useState([])

	useEffect(()=>{
    axios.get('tarot.json').then(res=>{
      setCards(res.data.cards)
    }).catch(err=>{
      alert('Algo deu errado!\n'+err.response)
    })
  }, [])

  cards.sort(()=> Math.random() - 0.5)
  const random = Math.floor(Math.random() * cards.length)
  const randomCard = cards[random]
	
	return<div className='card-container'>
      <div>
          <button className='btn-paginaInicial'
      onClick={()=> props.changePage('home')} >Página inicial</button>
      </div>
      {cards.map(card=>{
        return<TarotCards key={card.name}
                name={card.name}
                image={card.image}
                randomCard={randomCard}/>           
      })}
      </div>
}
export default TarotInformations