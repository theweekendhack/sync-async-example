//sync
const func1 = ()=>{

    console.log(`Function 1`)

}

//async
const getMoviesFromAPI = (callback)=>{

    //1000 (Async operation)

    
    const movies = ['Spiderman : No Way HOme',"Titanic", "The Matrix","Bad Boys II"]

    setTimeout(()=>{
        callback(movies);
    },0)

}
//sync
const func3 = (m)=>{

    
    console.log(m);
}


//Sync model
func1();  //blocking code
const movies = getMoviesFromAPI(func3); //ASYNC (non-blocking code)

