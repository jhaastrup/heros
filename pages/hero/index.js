import axios from 'axios';
import Head from 'next/head'
import Card from '../../components/card';

export default function Hero({data}) {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
         <div className="flex flex-wrap -mx-1 lg:-mx-4">
           {data.map((movie)=><Card key={movie.id} movie={movie}/>)}
         
         </div>
    
    </div>
  )
}

export async function getStaticProps(context) {

 
  const  {data} = await axios.get(`https://superhero-search.p.rapidapi.com/api/heroes`, {headers:{'X-RapidAPI-Key':'4246c48290msh0d2f1c7d0464fccp13118ajsnb84779f761be'}})
  console.log(data);
  return {
    props: {
      data,
    },
  }
}