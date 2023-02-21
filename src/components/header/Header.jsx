import logo from '../../assets/lightbulb.svg'
const Header = ( { showMenu, setShowMenu } ) => {
  
  return (
    <header>
      <div className="menu-bar"
        onClick={()=> setShowMenu(!showMenu) }>
        <span></span><span></span><span></span>
      </div>
      <div className="logo">
        <i>
        </i>
          {/* <img src={ logo } alt="" /> */}
          <h1>E-Power</h1>
      </div>
    </header>
  )
}

export default Header
