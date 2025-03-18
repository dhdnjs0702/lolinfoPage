import ItemCard from '@/components/ItemCard';
import { fetchItemList } from '@/utils/serverApi';
import React from 'react';

const ItemPage = async () => {
  const itemList = await fetchItemList();

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">아이템 정보</h1>
      </div>
      <div className="p4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          itemList.map((e) => {
            return <ItemCard key={e.name} item={e} />;
          })
        }
      </div>
    </>
  );
};

export default ItemPage;