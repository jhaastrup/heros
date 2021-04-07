import axios from 'axios';
import LargeCard from './../../components/largeCard';
const md5 = require('md5');

export default function More({data}) {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {  data&&<LargeCard movie={data}/> }
            
           </div> 
      
      </div>
    )
  }





export async function getStaticProps({params}){
  const ts = new Date().getTime();
  const publicKey = `9d6d058c2cf219dc55339f40bac544e5`;
  const privateKey = `f46f16dace738947640fb58aa7b7d3b73c0a8d7d`;

  const hash = md5(ts+privateKey+publicKey)
    //console.log(params.hero);
    const {data} = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${params.hero}?ts=${ts}&apikey=${publicKey}&hash=${hash}`,)
    console.log(data.data.results)
    return {
        props: {
          data: data.data.results[0],
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