
let stocks={
    fruits:["Strawberries","Blueberries"],
    flavour:["Chocolate","Mango"],
    liquid:["Ice","water"],
    holder:["Cone","Cup","Stick"],
    toppings:["Candy","Nuts","Sprinkles"]
}

let check=new Promise(function(resolve,reject){
    let shopOpen=true
    if(shopOpen){
        resolve()
    }
    else{
        reject()
    }
   
})

check.then(()=>{
    setTimeout(function(){
        document.write(stocks.fruits[1]+" was selected <br><br>")
    },1000)
    

})
.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
            document.write("Production was started  <br><br>")
        },4000)
    })
   
})
.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
            document.write("Fruits has been chopped <br><br>")
        },3000)
    })
   
})

.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
           document.write(` ${stocks.liquid[0]} was added <br><br>`)
        },2000)
    })
    

})

.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
            document.write(` Start the machine <br><br>`);
        },4000)
    })
    

})
.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
            document.write(`Ice cream placed on  ${stocks.holder[0]} <br><br>`);
        },1000)
    })
    

})

.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
            document.write(` ${stocks.toppings[0]} as toppings <br><br>`);
                },3000)
    })
    

})
.then(()=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
            document.write(`Serve Ice cream <br><br>`);
        },1000)
    })
    

})


.catch(()=>{
    document.write("Shop is closed")
})
