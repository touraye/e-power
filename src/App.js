import {Routes, Route} from 'react-router-dom';
import { useState } from "react"
import Dashboard from './components/Dashboard/Dashboard';
import Header from "./components/header/Header"
import Menu from "./components/menu/Menu"
import Buy from './components/Buy/Buy'
import Meters from './components/Meters/Meters';
import Register from "./components/Register/Register"
import Tokens from './components/Token/Tokens';
import Notification from './components/Notification/Notification';
import More from './components/More/More';
import Unregister from './components/More/Unregister';
import RequestToken from './components/requestToken/RequestToken'
import Testing from './components/Testing/Testing';


const App = () => {	
	const [ showMenu, setShowMenu ] = useState( false )
	
return (
	<div className='container'>
		<Header showMenu={showMenu} setShowMenu={setShowMenu} />
		{showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
		<Notification />
		<Routes>
			<Route path='/' element={<Dashboard />}></Route>
			<Route path='/meters' element={<Meters />}></Route>
			<Route path='/register' element={<Register />}></Route>
			<Route path='/buy' element={<Buy />}></Route>
			<Route path='/token' element={<Tokens />}></Route>
			<Route path='/more' element={<More />}></Route>
			<Route path='/Unregister' element={<Unregister />}></Route>
			<Route path='/requestToken' element={<RequestToken />}></Route>
			<Route path='/testing' element={<Testing />}></Route>
		</Routes>
	</div>
)
}

export default App