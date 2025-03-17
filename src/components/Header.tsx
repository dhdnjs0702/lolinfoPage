import Link from 'next/link'

const Header = () => {
  return (
    <nav className="bg-black-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        
        <div className="text-white-500 md:order-1">
          <Link href={'/'}>
          <svg xmlns="https://icons.veryicon.com/png/Game/League%20of%20Legends/Thresh.png" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          </Link>
        </div>

        
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <Link href="/" className="mr-6">홈</Link>
          <Link href="/champions" className="mr-6">챔피언</Link>
          <Link href="/items" className="mr-6">아이템 목록</Link>
          <Link href="/rotation">로테이션</Link>
        </div>
       
        
        <div className="order-2 md:order-3">
        </div>
      </div>
    </nav>
  )
}

export default Header