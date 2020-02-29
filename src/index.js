module.exports = function toReadable (number) {
  const string_number = number.toString()
  
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  const ten_twenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  

  return string_number.length === 1 && string_number[0] !== '0' ? `${units[number]}`.trim()

  : string_number.length === 2 && string_number[0] === '1' ? `${ten_twenty[number - Math.floor(number/10)*10]}`.trim()
  : string_number.length === 2 && string_number[0] !== '1' ? `${tens[Math.floor(number/10)]} ${units[number - Math.floor(number/10)*10]}`.trim()

  : string_number.length === 3 && string_number[1] === '0' &&  string_number[2] === '0' ? `${units[Math.floor(number/100)]} hundred`.trim()
  : string_number.length === 3 && string_number[1] === '0' &&  string_number[2] !== '0' ? `${units[Math.floor(number/100)]} hundred ${units[number - Math.floor(number/10)*10]}`.trim()

  : string_number.length === 3 && string_number[1] === '1' ? `${units[Math.floor(number/100)]} hundred ${ten_twenty[number - Math.floor(number/10)*10]}`.trim()
  : string_number.length === 3 && string_number[1] !== 0 && string_number[1] !== 1 &&  string_number[2] === 0 ? `${units[Math.floor(number/100)]} hundred ${tens[Math.floor((number - Math.floor(number/100)*100)/10)]}`.trim()
  
  : string_number.length === 3 && string_number[1] !== 0 && string_number[1] !== 1 &&  string_number[2] !== 0 ? `${units[Math.floor(number/100)]} hundred ${tens[Math.floor((number - Math.floor(number/100)*100)/10)]} ${units[number - Math.floor(number/10)*10]}`.trim()
  : 'zero' 
}
