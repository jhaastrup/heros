
const Card = ({movie}) =>{
    return(

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"> 
        <article className="overflow-hidden rounded-lg shadow-lg">
      
      <div className="max-h-96 overflow-hidden" >
      <a href= {`/hero/${movie.slug}`}>
      <img alt="Placeholder" className="block h-auto w-full" src={movie.images.md}/>
      </a>
      </div>
     
      
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
      
      </article>
        </div> 
      
    )
} 

 export default Card;