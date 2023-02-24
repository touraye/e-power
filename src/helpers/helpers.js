const kwh = 0.1
let fee = 0
let unit = 0
export const serviceFee = ( amount ) => {
  if ( amount <= 50 ) {    
     fee = amount - 5
     unit = fee * kwh
    return unit.toFixed(2)
  }
  if ( amount <= 150 ) {
    fee = amount - 8
		unit = fee * kwh
		return unit.toFixed(2)
  }
  if ( amount <= 300 ) {
    fee = amount - 10
		unit = fee * kwh
		return unit.toFixed(2)
  }
  if (amount <= 500) {
		fee = amount - 15
		unit = fee * kwh
		return unit.toFixed(2)
  }
  if (amount <= 1000) {
		fee = amount - 20
		unit = fee * kwh
		return unit.toFixed(2)
	}
}

export const currencyFormat = ( currency ) => {  
	let unFormated = Number(currency)?.toLocaleString('en-GB', {
		style: 'currency',
		currency: 'ZAR',
		minimumFractionDigits: 2,
	})
  
	return unFormated?.split('ZAR')
}

export const getCurrentMonth = () => {
	let currentMonth = new Date().getMonth() + 1
	return currentMonth
}