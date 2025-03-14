import { fetchItemList } from '@/utils/serverApi';
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ItemPage = () => {
    const {
        data:itemList,
        isPending,
        isError,
    } = useQuery({
        queryKey:["itemList"],
        queryFn:fetchItemList,
    });

    if(isPending){
        return <div>loaidng...</div>
    }

    if(isError){
        return<div>error occur...</div>
    }


    console.log(itemList);

  return <>
    <h1>아이템 목록 페이지</h1>
    {/* {
    itemList.map((e)=>{
        return<>
            <div key={}>

            </div>
        </>
    })
    } */}
  </>
}

export default ItemPage