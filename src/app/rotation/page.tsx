'use client'
import ChampionCard from '@/components/ChampionCard';
import { ChampionType } from '@/types/Champions';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const ChampionRotationPage = () => {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    async function fetchRoation(){
      try{
        const res = await fetch('http://localhost:3000/api/rotation')
        const data = await res.json();
        setChampions(data);
      }catch(error){
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }

    fetchRoation();
  },[]);


  if(isLoading){
    return <div>Loading,,,</div>
  }

  console.log("a->",champions);
  
  return (
    <>
    <div className="flex items-center justify-center">
    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">챔피언 로테이션 정보</h1>
    </div>
    <div className="p4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {
      champions.map((e:ChampionType)=>{
      return<>
       <Link href={`/champions/${e.id}`}>
      <ChampionCard champion={e}/>
      </Link>
      </>
      })
    }
    </div>
    </>
  )
}

export default ChampionRotationPage




