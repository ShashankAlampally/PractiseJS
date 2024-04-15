const p = new Promise((res,rej)=>{
    res("Resolved")
    rej("Rejected")
})


async function getData(){
    try{
        const a = await p;
        console.log(a)
    }
    catch(err){
        console.log(err)
    }
}
getData();