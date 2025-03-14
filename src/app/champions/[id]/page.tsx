
'use client'

import { fetchChampionDetail } from '@/utils/serverApi';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const ChampionDetailPage = () => {
  const { id } = useParams();
  const [championDetail, setChampionDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (id) {
      const getChampionData = async () => {
        try {
          const data = await fetchChampionDetail(id as string);
          setChampionDetail(data);
        } catch (error) {
          console.error("에러 발생:", error);
        } finally {
          setLoading(false);
        }
      };
      
      getChampionData();
    }
  }, [id]); 

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!championDetail) {
    return <div>챔피언 정보를 불러오는데 실패했습니다.</div>;
  }
console.log(championDetail);
  return (
    <>
      <div>ChampionDetailPage</div>
      <h1>챔피언 id = {id}</h1>
      <div></div>
    </>
  );
};

export default ChampionDetailPage;