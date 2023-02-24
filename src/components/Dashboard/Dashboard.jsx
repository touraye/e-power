import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import buy from '../../assets/cart-plus.svg'
import meters from '../../assets/list-task.svg'
import setting from '../../assets/setting.svg'
import history from '../../assets/clock-history.svg'
import enterToken from '../../assets/tv.svg'

const Dashboard = () => {
  const { meter } = useSelector( ( state ) => state ) 
  const { token } = useSelector( ( state ) => state )
   
  return (
    <div className='dashboard'>
      <h3>Light Your House with E-Power</h3>
      <p>Buy cash power striaght from your phone</p>

      <div className="grid-menu">
        <Link to='/buy' className='menu-icon buy-token'>
          <img src={buy} alt="buy" />
          buy token
        </Link>
        <Link to='/meters' className='menu-icon register-meter'>
          <img src={meters} alt="meters" />
          meter list
          {
            meter.length > 0 ?
            <span className='meter-length'>
            <p>{meter.length}</p>            
            </span> :
            ''
          }
        </Link>
        <Link to='/token' className='menu-icon tokens'>
          <img src={history} alt="token-list" />
          tokens
          {
            token.filter( t => t.used === false ).length > 0 ?
            <span className='token-length'>
            <p>{token.filter(t=>t.used === false).length}</p>            
            </span> :
            ''
          }
        </Link>
        <Link to='/setting' className='menu-icon more'>
          <img src={setting} alt="setting" />
          settings
        </Link>
        <Link to='/testing' className='menu-icon more'>
          <img src={enterToken} alt="enter token" />
          Enter Token
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
