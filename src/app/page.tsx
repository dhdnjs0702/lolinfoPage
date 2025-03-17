import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  return <>

<div className="pt-12 pr-0 pb-14 pl-0 bg-black">
  <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
    <div className="flex flex-col items-center sm:px-5 md:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
          <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block">
            <p className="inline">
              <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </p>
            <p className="inline text-xs font-medium">Sparta</p>
          </div>
          <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Lol 정보 페이지</a>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="block">
          <div className="relative w-full h-80 overflow-hidden rounded-lg">
            <Image
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.isu.pub%2F240602161410-6471eda0fc79028b1c2fa285ecba1b4d%2Fjpg%2Fpage_1_social_preview.jpg&type=sc960_832" 
              alt="Lol 게임 이미지"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          <Image
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fupload3.inven.co.kr%2Fupload%2F2023%2F04%2F25%2Fbbs%2Fi13409209119.png%3FMW%3D800&type=sc960_832" 
            alt="Lol 게임 이미지"
            fill
            className="object-cover"
          />
        </div>
        <Link href={'/champions'}>
          <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block">페이지로 이동하기</p>
        </Link>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">협곡에 존재하는 모든 영웅들을 확인해보세요</a>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          <Image
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEwMTlfMjA4%2FMDAxNTA4Mzc1MDQwNjI1.9feQEGQueB13suXXW9ddLxae_fd-hjDEjUkTiGH6Qpsg.OlH18-I85weIk2ZQSoZ0b2G2c7cdOkOTSKzsGrr1boYg.JPEG.sonicfish%2F15.jpg&type=sc960_832" 
            alt="Lol 게임 이미지"
            fill
            className="object-cover"
          />
        </div>
        <Link href={'/items'}>
          <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block">페이지로 이동하기</p>
        </Link>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">영웅을 강력하게 만들어주는 아이템들을 확인해보세요</a>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          <Image
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fappdata.hungryapp.co.kr%2Fdata_file%2Fdata_img%2F201609%2F10%2FW14734824096007838.png&type=sc960_832" 
            alt="Lol 게임 이미지"
            fill
            className="object-cover"
          />
        </div>
        <Link href={'/rotation'}>
          <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block">페이지로 이동하기</p>
        </Link>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">주기마다 바뀌는 무료 챔피언 정보를 확인해보세요</a>
      </div>
    </div>
  </div>
</div>
  </>
}