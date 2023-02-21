import { CopyToClipboard } from 'react-copy-to-clipboard';
import { currencyFormat } from '../../helpers/helpers'
import copy from '../../assets/clipboard.svg'

const Token = ({ token, handleNotification }) => {
	return (
		<li
			key={token.id}
			className='token-item'
			style={{ opacity: token.used ? '0.5' : '' }}>
			<p>Meter No: {token.meterNumber}</p>
			<p>Power Amount: GMD{currencyFormat(token.amount)}</p>
			<p className='token'>
				Token: {token.token}
				{!token.used && (
					<abbr title='Copy token'>
						<i>
							<CopyToClipboard text={token.token}>
								<img
									className='copy'
									src={copy}
									alt='copy'
									onClick={handleNotification}
								/>
							</CopyToClipboard>
						</i>
					</abbr>
				)}
			</p>
			<p>Units: {token.units} kwh</p>
			<p>Date: {token.date}</p>
		</li>
	)
}

export default Token
