import { ChampionData } from '@/types/Champions'
import Image from 'next/image'
import React from 'react'

const ChampionCard = ({champion}:ChampionData) => {
  return (
    <div className="card sm:max-w-sm">
  <div className="card-body">
    <Image 
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`} 
        alt={champion.name}
        width={120}
        height={120}
    />
    <p className="mb-4">{champion.name}</p>
    <p className="mb-4">{champion.title}</p>
  </div>
</div>
  )
}

export default ChampionCard