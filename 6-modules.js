const os = require('os')

// const user = os.userInfo()
// console.log(user);

// console.log(`The system uptime is: ${os.uptime()}`);

const osUpdate = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),

}

console.log(osUpdate);