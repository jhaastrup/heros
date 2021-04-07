import axios from 'axios';
import Head from 'next/head'
import Card from '../../components/card';
const md5 = require('md5');

export default function Hero({data}) {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
         <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.data.results.map((movie)=><Card key={movie.id} movie={movie}/>)}
         </div>
    
    </div>
  )
}

export async function getStaticProps(context) {
  const ts = new Date().getTime();
  const publicKey = `9d6d058c2cf219dc55339f40bac544e5`;
  const privateKey = `f46f16dace738947640fb58aa7b7d3b73c0a8d7d`;

  const hash = md5(ts+privateKey+publicKey)

  const  {data} = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`,)
 // console.log(data.data.results);
  return {
    props: {
      data,
    },
  }
}