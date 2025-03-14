import ItemCard from '@/components/ItemCard';
import { fetchItemList } from '@/utils/serverApi';

import React from 'react'

const ItemPage = async() => {
   const itemList = await fetchItemList();

  return (
    <>
      <h1>아이템 목록 페이지</h1>
      <div className="p4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {
        itemList.map((e) => {
          return <ItemCard item={e} key={e.name} />;
        })
      }
      </div>
    </>
  )
}

export default ItemPage