// Generates Hasher artifact at compile-time using Truffle's external compiler
// mechanism
const path = require('path')
const fs = require('fs')
const genContract = require('circomlib/src/poseidon_gencontract.js')

// where Truffle will expect to find the results of the external compiler
// command
const outputPath = path.join(__dirname, 'build', 'Hasher.json')

function main () {
  const contract = {
    contractName: 'Hasher',
    abi: genContract.abi,
    bytecode: genContract.createCode(3,8,57)
  }

  fs.writeFileSync(outputPath, JSON.stringify(contract))
}

main()
