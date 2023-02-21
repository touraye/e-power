import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { serviceFee } from '../../helpers/helpers'
import Notification from '../Notification/Notification'

import tokenImg from '../../assets/cart-plus.svg'
import { registerToken } from '../../redux/token/tokenSlice'

const Buy = ({ showForm,setShowForm }) => {
	const { meter } = useSelector((state) => state)
	const { token } = useSelector((state) => state)
	const dispatch = useDispatch()	
	const [meters, setMeters] = useState([])
	const [selectedOption, setSelectedOption] = useState(meters[1])
	const [ amount, setAmount ] = useState( '' )
	const [notify, setNotify] = useState('')


	useEffect(() => {
		setMeters(meter)
	}, [meter])

	const token1 = Math.floor(1000 + Math.random() * 9000)
	const token2 = Math.floor(1000 + Math.random() * 9000)
	const token3 = Math.floor(1000 + Math.random() * 9000)
	const token4 = Math.floor(1000 + Math.random() * 9000)
	const token5 = Math.floor(1000 + Math.random() * 9000)
	const joinToken =
		token1 + ' ' + token2 + ' ' + token3 + ' ' + token4 + ' ' + token5
	
	const handleBuy = async (e) => {
		e.preventDefault()

		const foundMeterNumber = meters.find(
			(meter) => meter.id === Number(selectedOption)
		)

		if (foundMeterNumber === undefined) {
			return alert('Please select a cusmoter')
		}

		const meterNumber = foundMeterNumber.meterNumber
		const extractDate = new Date()
		const formattedDate = extractDate.toString().substring(0, 24)

		const newObject = {
			meterNumber,
			amount,
			token: joinToken,
			units: serviceFee(amount),
			date: formattedDate,
			used: false,
			id: token.length + 1,
		}

		dispatch(registerToken(newObject))		
		setSelectedOption('')
		setAmount( '' )
		setShowForm( !showForm )		
	}	 

	return (
		<div className='main-container modal add-form'>
			{notify.length > 0 ? <Notification message={notify} /> : ''}
			<div className='back-btn-container'>
				<button className='back-btn' onClick={() => setShowForm(!showForm)}>
					&#8592;
				</button>
			</div>
			<h3>buy token</h3>
			<form onSubmit={handleBuy}>
				<div className='form-control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						id='amount'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='Amount.'
						name='amount'
						required
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='customer'>Customer</label>
					<select
						name='meter'
						id='customer'
						required
						onChange={(e) => setSelectedOption(e.target.value)}
						value={selectedOption}>
						<option>Select Customer</option>
						{meters.map((meter) => (
							<option key={meter.id} value={meter.id}>
								{meter.customerName}
							</option>
						))}
					</select>
				</div>
				<div className='form-control'>
					<input type='submit' value='PURCHASE' />
				</div>
			</form>
			<Link to='/token' className='register-btn'>
				<img src={tokenImg} alt='token img' />
			</Link>
		</div>
	)
}

export default Buy
