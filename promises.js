//sync
const func1 = ()=>{

    console.log(`Function 1`)
}

//async
const getMoviesFromAPI = ()=>{

    //1000 (Async operation)

    const movies = ['Spiderman : No Way HOme',"Titanic", "The Matrix","Bad Boys II"]

    setTimeout(()=>{
        return movies;
    },0)

}
//sync
const func3 = (m)=>{

    console.log(m)
}


//Sync model
func1();  //blocking code

const movies = getMoviesFromAPI(); //non-blocking code
func3(movies); //blocking code
