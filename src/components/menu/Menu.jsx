import { Link } from "react-router-dom"
import lightbulb from '../../assets/lightbulb.svg'
import register from '../../assets/plus-lg.svg'
import buy from '../../assets/cart-plus.svg'
import history from '../../assets/clock-history.svg'
import setting from '../../assets/setting.svg'


const Menu = ({showMenu, setShowMenu}) => {  
  return (
		<nav className='menu'>
			<div className='close-menu' onClick={() => setShowMenu(!showMenu)}>
				<span></span>
				<span></span>
			</div>
			<ul>
				<li>
					<Link to='/' onClick={() => setShowMenu(!showMenu)}>
						<div className='flex'>
							<img src={lightbulb} alt='' />
							<p>home</p>
						</div>
					</Link>
				</li>
				<li>
					<Link to='/register' onClick={() => setShowMenu(!showMenu)}>
						<div className='flex'>
							<img src={register} alt='' />
							<p>register meter</p>
						</div>
					</Link>
				</li>
				<li>
					<Link to='/buy' onClick={() => setShowMenu(!showMenu)}>
						<div className='flex'>
							<img src={buy} alt='' />
							<p>buy cash power</p>
						</div>
					</Link>
				</li>
				<li>
					<Link to='/history' onClick={() => setShowMenu(!showMenu)}>
						<div className='flex'>
							<img src={history} alt='' />
							<p>history</p>
						</div>
					</Link>
				</li>
				<li>
					<Link to='/history' onClick={() => setShowMenu(!showMenu)}>
						<div className='flex'>
							<img src={setting} alt='' />
							<p>setting</p>
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
