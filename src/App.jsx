import scarecrow from './assets/Scarecrow.png'


const App = () => {
  return (
    <div className="relative rounded-lg w-1440px h-1080px font-medium text-sm">
      <div className="absolute w-133px top-40px left-77px h-25px text-gray-1 tracking-tightest font-inco text-2xl uppercase leading-6 text-base font-bold">
        404 not found
      </div>
      <img
        className="w-539.33px h-447.43px absolute top-24.54% left-5.35% bottom-34.03% right-57.21% "
        src={scarecrow}
      ></img>
      <div className="absolute text-center left-577px top-1039px h-17px w-300px  text-footergrey">
        created by NivasReddy - devChallenges.io
      </div>
      <div className="absolute w-586px h-190px left-735px top-265px font-bold font-sm text-sxl normal-case tracking-tight text-gray-900">
        I have bad news for you
      </div>
      <div className="w-381px h-108px absolute top-491px left-736px font-sm font-normal text-cst tracking-tight text-gray-2">
        The page you are looking for might be removed or is temporarily
        unavailable
      </div>
      <button className="bg-black text-white uppercase absolute top-663px left-740px h-68px w-216px ">
        back to homepage
      </button>
    </div>
  )
}

export default App