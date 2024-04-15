const p = new Promise((resolve,reject)=>{
    if(5>10) {resolve("Resolved")}
    else {reject("Rejected")}
})
p.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})