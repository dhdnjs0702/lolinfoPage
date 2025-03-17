import { ChampionData } from "@/types/Champions";
import { ItemData } from "@/types/Items";

export const fetchChampionList = async() => {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",{
        next:{
            revalidate: 86400,
        }
    })

    const {data}:{data:ChampionData} = await res.json();

    const champList = Object.values(data);

    return champList;
}

export const fetchItemList = async() => {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",{
        cache: "force-cache"
    })

    const {data}:{data:ItemData} = await res.json();

    const ItemList = Object.values(data);

    console.log(ItemList);

    return ItemList;
}

export const fetchChampionDetail = async(id:string)=>{
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${id}.json`);
    const data = await res.json();
    
    return data.data;
}