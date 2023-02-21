import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { unregisterMeter } from '../../redux/meter/meterSlice'
import { unregisterToken } from '../../redux/token/tokenSlice'

const Unregister = () => {
  const { meter } = useSelector( ( state ) => state )    
	const { token } = useSelector( ( state ) => state )  
	const dispatch = useDispatch()
	const[meters,setMeters]=useState([])
  const [ selectedOption, setSelectedOption ] = useState(meters[0] )  
  console.log('selectedOption', selectedOption)   

  const handleSubmit = ( e ) => {
		e.preventDefault()

		if(selectedOption === undefined ) return alert('Please select a customer')
		
		const foundMeterNumber = meters.find( meter => meter.id === Number(selectedOption) )		
		
		if ( window.confirm( 'Proceed deleting  meter and all related tokens' ) ) {
			
			dispatch( unregisterMeter( foundMeterNumber.meterNumber ) )
			dispatch(unregisterToken(foundMeterNumber.meterNumber))
	
			setSelectedOption('')
		}
		
	}
	
	useEffect( () => {
		setMeters(meter)
	}, [meter])
  
  return (
		<div className='main-container'>
			{/* <div className='back-btn-container'>
				<Link className='back-btn' to='/more'>
					&#8592;
				</Link>
			</div> */}
			<h3>unregister meter</h3>
			<p>If unregister a meter it's token will also be deleted as well</p>
			<form onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='customer'>customer</label>
					<select
						name='meter'
						id='customer'
						required
						onChange={(e) => setSelectedOption(e.target.value)}
						value={selectedOption}>
						<option>Select Customer</option>
						{meters.map((item) => (
							<option key={item.id} value={item.id}>
								{item.customerName}
							</option>
						))}
					</select>
				</div>
				<div className='form-control'>
					<input type='submit' value='Unregister' />
				</div>
			</form>
		</div>
	)
}

export default Unregister
