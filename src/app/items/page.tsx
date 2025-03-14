import React from 'react'
import ItemPage from './item.page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ItemComponentPage = async() => {
    const queryClient = new QueryClient();

  return (<>
    <div>ItemComponentPage</div>
    <QueryClientProvider client={queryClient}>
     <ItemPage />
    </QueryClientProvider>
    </>
  )
}

export default ItemComponentPage