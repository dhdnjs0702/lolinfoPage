import React from "react";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchChampionList } from "@/utils/serverApi";
import ChampionPage from "./champion.page";


const ChampionComponentPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["championList"],
    queryFn: () => fetchChampionList(),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ChampionPage />
      </HydrationBoundary>
    </div>
  );
};

export default ChampionComponentPage;