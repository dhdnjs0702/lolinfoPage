import Link from 'next/link'


const Header = () => {
  return (
<nav className="navbar rounded-box shadow">
  <div className="w-full md:flex md:items-center md:gap-2">
    <div id="default-navbar-collapse" className="md:navbar-end grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
      <div className="flex menu md:menu-horizontal gap-20 p-0 text-base max-md:mt-2">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">로테이션</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header