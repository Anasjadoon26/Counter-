let counter=document.getElementById("count")


let count=0

function increment(){
    count++
    counter.innerText=count
    console.log(count)
}
function save(){
    let entry=count+" "
    saveEl.innerText += entry


    console.log(count)
}

