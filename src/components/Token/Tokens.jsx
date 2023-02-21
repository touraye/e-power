import { useState } from 'react'
import { useSelector } from 'react-redux';
import buy from '../../assets/cart-plus.svg'
import Buy from '../Buy/Buy';
import Notification from "../Notification/Notification";

import Token from './Token';

const Tokens = () => {
  const { token } = useSelector( ( state ) => state )  
  const [filtered, setFiltered] = useState('unuse')
	const [ notify, setNotify ] = useState( '' )
	const [ showForm, setShowForm ] = useState( false )
	

  const handleNotification = ( message, time ) => {
    setNotify( 'Token Copied' )
    setTimeout( () => {
      setNotify('')
    }, 2000)
  }

  const filteredToken =
		filtered === 'all'
			? token.map((t) => t).reverse()
			: filtered === 'used'
			? token.filter((t) => t.used === true).reverse()
			: token.filter((t) => t.used === false).reverse()
		
  
  return (
		<div className='main-container token-list'>
			{/* <div className="back-btn-container">
          <Link className='back-btn' to='/'>&#8592;</Link>
      </div> */}
			{ showForm &&
				<Buy
				showForm={showForm}
					setShowForm={ setShowForm }
				/> }
			<div className='sub'>
				<h3>list of your tokens</h3>
				<div>
					{token?.length > 0 ? (
						<select
							name='filter'
							id='filter'
							value={filtered}
							onChange={(e) => setFiltered(e.target.value)}>
							<option value='unuse'>unuse</option>
							<option value='used'>used</option>
							<option value='all'>all</option>
						</select>
					) : (
						''
					)}
				</div>
			</div>
			{notify.length > 0 ? <Notification message={notify} /> : ''}

			{token.length > 0 ? (
				<ul className='token-container'>
					{filtered === 'unuse' &&
					token.filter((t) => t.used === false).length < 1
						? 'You have used all of your tokens'
						: token.filter((t) => t.used === false).length > 0
						? filteredToken.map((token) => (
								<Token
									key={token.id}
									token={token}
									handleNotification={handleNotification}
								/>
						  ))
						: filteredToken.map((token) => (
								<Token
									key={token.id}
									token={token}
									handleNotification={handleNotification}
								/>
						  ))}
				</ul>
			) : (
				<p>You haven't bought any token yet. Buy token</p>
			)}
			<button onClick={() => setShowForm(true)} className='register-btn'>
				<img src={buy} alt='register' />
			</button>
		</div>
	)
}

export default Tokens
