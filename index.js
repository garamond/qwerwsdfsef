const fs = require('fs')

console.log(`Running Node ${process.version}`)

fs.writeFileSync('hello.txt', `Hello, ${Math.random()}!`)