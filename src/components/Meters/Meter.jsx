import React from 'react'

const Meter = ({data}) => {
  return (
		<li className='meter-list'>
			<h4>{data.customerName}</h4>
			<p>Meter No: {data.meterNumber}</p>
			<p>Phone No: {data.phone}</p>
		</li>
	)
}

export default Meter
