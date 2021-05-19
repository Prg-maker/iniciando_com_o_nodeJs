const os = require('os')


setInterval(() =>{

    const {freemem , totalmem} = os

    const total = parseInt(totalmem() / 1024 / 1024 )
    const mem = parseInt(freemem() / 1024 / 1024 )
    
    const porcents = parseInt((mem / total) * 100)
    
    
    const stats = {
        freemem: `${mem}MB`, 
        total: `${total}MB`, 
        usage: `${porcents}%`, 
    }
    console.clear()
    console.table(stats)
    
},1000)