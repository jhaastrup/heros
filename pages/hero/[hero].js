import axios from 'axios';
import LargeCard from './../../components/largeCard';

export default function More({data}) {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
             <LargeCard movie={data}/>
           
           </div> 
      
      </div>
    )
  }





export async function getStaticProps({params}){
    console.log(params.hero);
    const data = await axios.get(`https://superhero-search.p.rapidapi.com/api/?hero=${params.hero}`, {headers:{'X-RapidAPI-Key':'4246c48290msh0d2f1c7d0464fccp13118ajsnb84779f761be'}})
    //console.log(data)
    return {
        props: {
          data: data.data,
        },
      }
} 

export async function getStaticPaths() {
    return {
      paths: [
         { params: { hero: 'spiderman' } },
      ],
      fallback: true
    };
  }