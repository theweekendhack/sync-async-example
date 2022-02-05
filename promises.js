//sync
const func1 = ()=>{

    console.log(`Function 1`)

}

//async
const getMoviesFromAPI = ()=>{

    //1000 (Async operation)

    
    const movies = ['Spiderman : No Way HOme',"Titanic", "The Matrix","Bad Boys II"]

    return new Promise ((resolve,reject)=>{
         resolve(movies); // IF successful return movies with the promise 
    });
 

}
//sync
const displayMovies = (m)=>{

    
    console.log(m);
}


//Sync model
func1();  //blocking code
getMoviesFromAPI() // a returns a promise 
.then((movies)=>{

    displayMovies(movies);
})
.catch((err)=>{
    console.log(`Error is ${err}`);
})
