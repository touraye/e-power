const Notification = ( { message } ) => {  
  const style = message?.length > 0 ? '#444' : 'none'

  if ( message === null ) {
    return null
  }

  return (
		<div
			className='notification-container'
			style={{backgroundColor: style}}>
			<p>{message}</p>
		</div>
	)
}

export default Notification
