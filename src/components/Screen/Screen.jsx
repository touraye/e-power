const Screen = ( { amount, units, showModal, setShowModal } ) => {
  console.log( amount, units );
  return (
    <div className='modal' style={{border: amount > 0 ? '1px solid white' : '1px solid red'}}>
      <div className="info">
        <h3>{ units }</h3>
        <p>D{ amount }</p>
      </div>
      <button onClick={()=>setShowModal(!showModal)} className='close-btn'>close</button>
    </div>
  )
}

export default Screen
