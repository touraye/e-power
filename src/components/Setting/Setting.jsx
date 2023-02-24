import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div className='main-container more-container'>
      <div className="back-btn-container">
          <Link className='back-btn' to='/'>&#8592;</Link>
      </div>
      <h3>manage you meters</h3>
      <ul className='list'>
        <li className='item'>
          <Link to='/Unregister'>
            <p>unregister meter</p>
          </Link>
        </li>
        <li className='item'>
          <Link to='/requestToken'>
            <p>request a token</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Setting
