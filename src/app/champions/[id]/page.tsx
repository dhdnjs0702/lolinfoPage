'use client'

import { ChampionDetailType } from '@/types/ChampionDetailType';
import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const ChampionDetailPage = () => {
  const { id } = useParams();
  const [championDetail, setChampionDetail] = useState<ChampionDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const getChampionData = async () => {
        try {
          const data = await fetchChampionDetail(id as string);
          setChampionDetail(data[id as keyof typeof data]);
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
    return <div className="flex justify-center items-center h-screen">로딩 중...</div>;
  }

  if (!championDetail) {
    return <div className="flex justify-center items-center h-screen">챔피언 정보를 불러오는데 실패했습니다.</div>;
  }
 
  console.log(championDetail);
  const championImageUrl = championDetail.image?.full 
    ? `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${championDetail.image.full}`
    : '';

  
  const getSkillImageUrl = (skillImage: {full: string} ) => {
    return skillImage?.full 
      ? `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${skillImage.full}`
      : '';
  };
  
  
  const passiveImageUrl = championDetail.passive?.image?.full
    ? `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive/${championDetail.passive.image.full}`
    : '';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        
        <div className="flex flex-col md:flex-row p-6 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            {championImageUrl && (
              <Image
                src={championImageUrl} 
                alt={championDetail.name} 
                width={64}  
                height={64} 
                className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
              />
            )}
          </div>
          <div className="md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold">{championDetail.name}</h1>
            <h2 className="text-xl text-yellow-400">{championDetail.title}</h2>
            <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              {championDetail.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-300">
              {championDetail.blurb}
            </p>
          </div>
        </div>

        
        <div className="p-6 bg-gray-900">
          <h3 className="text-2xl font-bold mb-4">스킬</h3>
          
          
          {championDetail.passive && (
            <div className="mb-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 mr-4">
                  {passiveImageUrl && (
                    <Image
                    src={passiveImageUrl} 
                    alt={championDetail.passive.name}
                    width={64}  
                    height={64} 
                    className="w-full h-full object-cover rounded-md border-2 border-gray-600"
                  />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">패시브: {championDetail.passive.name}</h4>
                  <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: championDetail.passive.description }}></p>
                </div>
              </div>
            </div>
          )}
          
          
          {championDetail.spells?.map((spell, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 mr-4">
                  {spell.image && (
                    <Image
                      src={getSkillImageUrl(spell.image)} 
                      alt={spell.name} 
                      width={64}  
                      height={64} 
                      className="w-full h-full object-cover rounded-md border-2 border-gray-600"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">
                    {['Q', 'W', 'E', 'R'][index]}: {spell.name}
                  </h4>
                  <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: spell.description }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;