import { fetchChampionList } from "@/utils/serverApi";



const url = "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations"

export async function GET() {
    try {
        
        const RIOT_API = process.env.NEXT_PUBLIC_RIOT_API;
        
        if (!RIOT_API) {
            console.log("API 키가 없습니다");
            return new Response(JSON.stringify({error: "API 키가 없습니다"}), {
                status: 500,
                headers: {"Content-Type": "application/json"}
            });
        }
        
        const res = await fetch(url, {
            headers: {
                "X-Riot-Token": RIOT_API,
            }
        });
        
        if (!res.ok) {
            return new Response(JSON.stringify({error: `라이엇 API 오류: ${res.status}`}), {
                status: res.status,
                headers: {"Content-Type": "application/json"}
            });
        }
        
        const data = await res.json();
        
        
        const freeChampionIds = data.freeChampionIds || [];
        // console.log("무료 챔피언 ID 배열:", freeChampionIds);
        
        
        const champions = await fetchChampionList();
        
        if (!champions || champions.length === 0) {
            return new Response(JSON.stringify({error: "챔피언 목록을 가져오지 못했습니다"}), {
                status: 500,
                headers: {"Content-Type": "application/json"}
            });
        }
        
        
        const freeChampion = freeChampionIds.length > 0 
            ? champions.filter((e) => freeChampionIds.includes(Number(e.key)))
            : [];
    
        
        return new Response(JSON.stringify(freeChampion), {
            headers: {"Content-Type": "application/json"}
        });
    } catch (error) {
        console.error("서버 오류:", error);
        return new Response(JSON.stringify({
            error: "서버 오류가 발생했습니다", 
            message: "알 수 없는 오류"
        }), {
            status: 500,
            headers: {"Content-Type": "application/json"}
        });
    }
}