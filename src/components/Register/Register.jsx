import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerMeter } from "../../redux/meter/meterSlice";

const Register = ( { showForm, setShowForm } ) => {
	const {meter}=useSelector((state)=>state)
	const dispatch = useDispatch()
	const [customerName, setCustomer] = useState('')
	const [ phone, setPhone ] = useState( '' )
	const [meterNumber,setMeterNumber]=useState('')

	// const meterNumber = Math.floor(10000000000 + Math.random() * 9000).toString()

	const handleRegister = async (e) => {
		e.preventDefault()

		if ( meterNumber.length !== 11 ) {
			return alert('Meter number should be 11 digits.')
		}

		if ( meter.find( item => item.meterNumber === meterNumber ) ) {
			return alert('Meter number already exist. Meter number should be unique.')
		}

		dispatch(
			registerMeter({
				customerName,
				meterNumber,
				phone,
				id: meter.length + 1
			})
		)

		setCustomer('')
		setMeterNumber('')
		setPhone( '' )
		setShowForm(false)
	}

	return (
		<div className='main-container modal add-form'>
			<div className='back-btn-container close-modal'>
				<button onClick={() => setShowForm(!showForm)} className='back-btn'>
					&#8592;
				</button>
			</div>
			<h3>Register meter number</h3>

			<form onSubmit={handleRegister}>
				<div className='form-control'>
					<label htmlFor='customerName'>customer name</label>
					<input
						type='text'
						id='customerName'
						value={customerName}
						placeholder='Customer Name.'
						onChange={(e) => setCustomer(e.target.value)}
						required
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='meterNumber'>meter number</label>
					<input
						type='number'
						id='meterNumber'
						value={meterNumber}
						placeholder='Meter Number(11 digits).'
						onChange={(e) => setMeterNumber(e.target.value)}
						required
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='phone'>phone number</label>
					<input
						type='text'
						id='phone'
						value={phone}
						placeholder='Phone No.'
						onChange={(e) => setPhone(e.target.value)}
						required
					/>
				</div>
				<div className='form-control'>
					<input type='submit' value='SUBMIT' />
				</div>
			</form>
		</div>
	)
}

export default Register
