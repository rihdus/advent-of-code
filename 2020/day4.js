// https://adventofcode.com/2020/day/3/input
let input = document.body.innerText.split('\n\n')

.map(l => l.split(/['\n',' ']/).filter(Boolean))
.map(entries => {
  return entries.reduce((obj, entry) => {
    const kv = entry.split(':')
    obj[kv[0]] = kv[1]
    return obj;
  }, {})
})

optionalFields = ['cid']
requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

console.log('total:', data.length)

looseValidation = data.filter(({cid, ...rest}) => {
  return requiredFields.map(key => !!rest[key])
    .filter(Boolean).length === requiredFields.length
}).length

console.log('looseValidation', looseValidation)

strictValidation = data.filter(({cid, ...rest}) => {
  
  if(requiredFields.map(key => !!rest[key])
    .filter(Boolean).length != requiredFields.length) return false;

  const byr = parseInt(rest.byr);
  const iyr = parseInt(rest.iyr);
  const eyr = parseInt(rest.eyr);
  if(byr < 1920 || byr > 2002) return false;
  if(iyr < 2010 || iyr > 2020) return false;
  if(eyr < 2020 || iyr > 2030) return false;
  
  const heightMatch = rest.hgt.match(/^(\d+)(cm|in)$$/)
  if(!heightMatch) return false
  const height = parseInt(heightMatch[1])
  const unit = heightMatch[2]
  if(unit == 'cm' && (height < 150 | height > 193)) return false;
  if(unit == 'in' && (height < 59 | height > 76)) return false;

  const hcl = rest.hcl.match(/^#([a-f0-9]+)$/)
  if(!hcl) return false

  const ecl = rest.ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)
  if(!ecl) return false

  const pid = rest.pid.match(/^(\d{9})$/)
  if(!pid) return false

  return true;
}).length

console.log('strictValidation', strictValidation)