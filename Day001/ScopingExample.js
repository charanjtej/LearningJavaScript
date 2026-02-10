function scopeTest(){
    if(true){
        var funVar = "I am declared with Var inside the block";
        let funLet = "I am declared with Let inside the block";
        const c = "I am constant";
    }
    console.log(funVar); //output: I am declred with Var inside the block
    console.log(funLet); //Reference Error: 
    console.log(c);
}

scopeTest();