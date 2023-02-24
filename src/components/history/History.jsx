import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Token from '../Token/Token'
import { getCurrentMonth } from '../../helpers/helpers'

const History = () => {
  const { token } = useSelector( ( state ) => state )
  const [ filtered, setFiltered ] = useState( 'thisMonth' )
  console.log( 'filtered', filtered )
  console.log( 'getCurrentMonth', getCurrentMonth() )
  console.log(token.map((t) => t.date.toLocaleDateString))
  // const tokenForThisMonth = token.filter( m=>m.createdAt))
	return (
		<div className='main-container more-container'>
			<div className='back-btn-container'>
				{/* <Link className='back-btn' to='/'>
					&#8592;
				</Link> */}
			</div>
			<h3>history data and stats</h3>
			<div className='sub'>
				<p>showing {token?.length} </p>
				<div>
					{token?.length > 0 ? (
						<select
							name='filter'
							id='filter'
							value={filtered}
							onChange={(e) => setFiltered(e.target.value)}>
							<option value='thisMonth'>this month</option>
							<option value='threeMonths'>three months back</option>
							<option value='sixMonths'>six months back</option>
						</select>
					) : (
						''
					)}
				</div>
			</div>
			<ul className='token-container'>
				{token.length > 0 ? (
					token.map((t) => <Token key={t.id} token={t} />).reverse()
				) : (
					<p>You haven't bought any token yet. Buy token</p>
				)}
			</ul>
		</div>
	)
}

export default History
