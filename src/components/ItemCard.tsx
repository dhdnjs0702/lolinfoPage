'use client';

import { ItemData } from '@/types/Items'
import Image from 'next/image'
import React from 'react'

const ItemCard = ({item}: {item: ItemData}) => {
  return (
    <div className="card sm:max-w-sm">
      <div className="card-body">
        <Image 
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`} 
            alt={item.name}
            width={120}
            height={120}
        />
        <p className="mb-4">{item.name}</p>
        <p className="mb-4">{item.plaintext}</p>
      </div>
    </div>
  )
}

export default ItemCard