const LargeCard = ({movie}) =>{
    return(
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"> 
      <article className="overflow-hidden rounded-lg shadow-lg">
    
   
    <a href="#">
    <img alt="Placeholder" className="block h-auto w-full" src= "#"/>
    </a>
   
    
    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 className="text-lg">
      <a className="no-underline hover:underline text-black font-bold" href="#">
      {movie.name}
      </a>
    </h1>
    
    </header>
    
    <p className="ml-2 leading-relaxed text-sm p-2 md:p-2">
    {movie.work.occupation}
      </p>  

      <p className="ml-2 leading-relaxed text-sm p-2 md:p-2">
    {movie.connection.groupAffiliation}
      </p> 
    
    </article>
      </div> 
    
    )
}


export default LargeCard;