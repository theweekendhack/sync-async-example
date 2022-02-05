//sync
const func1 = ()=>{

    console.log(`Function 1`)
}

//async
const getMoviesFromAPI = ()=>{

    //1000 (Async operation)

    setTimeout(()=>{
        console.log(`Function 2`)
    },0)

 
}

//sync
const func3 = ()=>{

    console.log(`Function 3`)
}

//sync
const func4 = ()=>{

    console.log(`Function 4`)
}

//Sync model
func1();  //blocking code
getMoviesFromAPI(); //non-blocking code
func3(); //blocking code
func4();  //blocking  code 


