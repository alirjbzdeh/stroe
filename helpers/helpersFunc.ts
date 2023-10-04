// this is how function get decleared here 
// export function a(b: number, c: number): number {
//     return b * c;
// }

export function p2e (string: string) {
    const inputString = String(string); 
    
    return inputString.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}


export function toLocal(number: number | string = 0 , decimal: number = 8) {
    // purify number
    number = number + ''
    if (number === '.') {
      if (decimal) { return '0.' } else { return '' }
    }
  
    if (number.startsWith('-')) { return 0 }
  
    if (number.toLowerCase().includes('e')) {
      if (parseFloat(number) < 1.0e-6) {
        // zero numbers
        return 0
      } else { number = parseFloat(number) + '' }
    }
  
    number = p2e(number).replace(/[^\d.]|\.{2}|,/ig, '')
    if (number.includes('.')) {
      number = number.split('.')[0] + '.' + (number.split('.')[1] || '')
    }
  
    if (parseFloat(number)) {
      // separate number
      const int = parseFloat(number.split('.')[0]).toLocaleString('en')
      if (number.includes('.') && decimal) {
        return int + '.' + (number.split('.')[1].slice(0, decimal) || '')
      } else {
        return int
      }
    } else {
      return number
    }

}


