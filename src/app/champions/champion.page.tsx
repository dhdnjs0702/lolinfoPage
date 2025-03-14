'use client'

import ChampionCard from '@/components/ChampionCard';
import { fetchChampionList } from '@/utils/serverApi';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'

//ISR



const ChampionPage = () => {
  const {data: champList, isPending, isError}=useQuery({
    queryKey:["championList"],
    queryFn: fetchChampionList
  });

  if(isPending)
    return <div>Loading...</div>

  if(isError){
    return<div>Error occur</div>
  }
  
  return (
    <>
    <div>ChampionPage</div>
    <div className="p4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {champList.map((e)=>{
        return<div key={e.id}>
            <Link href={`/champions/${e.id}`}>
                <ChampionCard champion={e}/>
            </Link>
        </div>
    })}
    </div>
    </>
  )
}

export default ChampionPage