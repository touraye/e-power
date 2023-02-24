import { useState } from 'react'
import { useSelector } from 'react-redux'
import Register from '../Register/Register'
import Meter from './Meter'
import register from '../../assets/plus-lg.svg'

const Meters = () => {
	const { meter } = useSelector( ( state ) => state )		
	const [ showForm, setShowForm ] = useState( false )
	
  return (
		<div className='main-container meter-list-container'>		
			<h3>meter list</h3>
			{
				showForm &&
				<Register showForm={ showForm } setShowForm={ setShowForm } />
			}
			<ul>
				{ meter.length > 0 ?
					meter.map( ( item ) => (
					<Meter key={item.id} data={item} />
				)).reverse() : 'No meter number registered. Register your meter!'}
			</ul>
			{showForm ? "": <div className='btn-container'>				
				<button onClick={() => setShowForm(true)} className='register-btn'>
					<img src={register} alt='register' />
				</button>
			</div> }
		</div>
	)
}

export default Meters
