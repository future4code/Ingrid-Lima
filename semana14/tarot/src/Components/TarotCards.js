import {useState, useRef} from 'react'
import TarotDetails from './TarotDetails'
import '../App.css'

const TarotCards = (props)=>{
	const [showAndHide, setShowAndHide] = useState(false)	


	const imageUrl = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341'
	const imageBackCard = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'

	return<div className='card'>
			<div>Encontre o {props.randomCard.name}</div>			
			{showAndHide ? <TarotDetails image={props.image} setShowAndHide={setShowAndHide}
			name={props.name} randomCard={props.randomCard}/> : null}
			{!showAndHide ? <img className='back' src={imageBackCard}
			onClick={()=> setShowAndHide(true)}/> : null}
			<div>{showAndHide ? props.name : null}</div>
			{showAndHide ? <img className='character' src={`${imageUrl}/${props.image}`}/>
			: null}
		  </div>
}
export default TarotCards