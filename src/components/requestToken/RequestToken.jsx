import { useState } from 'react'
import { useSelector } from 'react-redux'
import buy from '../../assets/cart-plus.svg'
import Buy from '../Buy/Buy'
import Notification from '../Notification/Notification'

import Token from '../Token/Token'

const RequestToken = () => {
	const { token } = useSelector((state) => state)
	const [filter, setFilter] = useState(3)
	const [notify, setNotify] = useState('')
	const [showForm, setShowForm] = useState(false)

	const handleNotification = (message, time) => {
		setNotify('Token Copied')
		setTimeout(() => {
			setNotify('')
		}, 2000)
	}

  const limit = filter
  const latestTokens = token.slice( -limit ) 

	return (
		<div className='main-container token-list'>
			{/* <div className="back-btn-container">
          <Link className='back-btn' to='/'>&#8592;</Link>
      </div> */}
			{showForm && <Buy showForm={showForm} setShowForm={setShowForm} />}
			<h3>RequestToken</h3>
			<div className='sub'>
				<p>Your last {filter} tokens</p>
				<select name='limit' id='limit' value={filter} onChange={(e)=> setFilter(e.target.value)}>
					<option value='3'>3</option>
					<option value='6'>6</option>
					<option value='9'>9</option>
				</select>
			</div>
			{notify.length > 0 ? <Notification message={notify} /> : ''}

			<ul className='token-container'>
				{latestTokens.map((token) => (
					<Token
						key={token.id}
						token={token}
						handleNotification={handleNotification}
					/>
				)).reverse()}
			</ul>
		</div>
	)
}

export default RequestToken
