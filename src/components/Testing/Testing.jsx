import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateToken } from '../../redux/token/tokenSlice.js'

import Screen from '../Screen/Screen.jsx'

const Testing = () => {
  const {meter} = useSelector((state)=> state)
  const { token } = useSelector( ( state ) => state )
  const dispatch = useDispatch()  
  const [ selectedOption, setSelectedOption ] = useState( meter[ 0 ] )
  const [ tokens, setTokens ] = useState( '' )  
  const [ showModal, setShowModal ] = useState( false )
  const [ amount, setAmount ] = useState( '' )
  const [ units, setUnits ] = useState( '' )  
  

  const handleSubmit = ( e ) => {
    e.preventDefault()


    const filterMeterNumber = token.filter( t => t.meterNumber === selectedOption )
    const matchCustomer = filterMeterNumber.find( t => t.token === tokens )     
    
    if ( matchCustomer ) {
      setAmount( matchCustomer.amount )
      setUnits( matchCustomer.units )  
      

      dispatch( updateToken(matchCustomer))
          
      setSelectedOption( '' )
      setTokens('')
    
    } else {
      setAmount( '0' )
      setUnits('0.00')
    }  
    setShowModal( !showModal )    
  }  

  return (
    <div className='main-container testing'>
      { showModal && <Screen amount={ amount } units={ units } showModal={ showModal } setShowModal={ setShowModal }/>}
       <div className="back-btn-container">
          <Link className='back-btn' to='/'>&#8592;</Link>
      </div>
      <h3>enter your token</h3>      
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="customer">customer</label>
          <select value={selectedOption} onChange={(e)=> setSelectedOption(e.target.value)}>
            <option>Select Customer</option>
            {
              meter?.map( m => (
                <option key={m.id} value={m.meterNumber}>{ m.customerName }</option>
              ))
            }
          </select>
        </div>  
        <div className="meter-container">
          <div className="screen">           
            <input type="text" value={tokens} onChange={(e)=> setTokens(e.target.value)} placeholder='Enter Token' required/>
          </div>
          <div className="input-container">            
            <input type="reset" value="RESET" />
            <input type="submit" value="ENTER" />        
          </div>
        </div>
      </form>
    </div>
  )
}

export default Testing
