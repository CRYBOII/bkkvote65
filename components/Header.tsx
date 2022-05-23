import React from 'react'

function Header() {
  return (
    <div className=" flex justify-between bg-black ">
      {/* Logo */}

      <div className=" p-2">
        <img src="/logo.png" alt="" />
      </div>
      {/* Mid Logo */}
      <div className="   hidden  items-center  md:flex">
        <img src="/thematterxod.png" alt="" className=" i" />
      </div>

      {/* Menu */}
      <div className="flex space-x-2 p-2  pb-0">
        <button className="xs:min-w-[105px] relative min-w-[96px] rounded-tr-md rounded-tl-md bg-[#E7E9EA] py-1 text-lg font-medium text-black sm:min-w-[120px]">
          <span className="absolute -left-1 bottom-0 h-2 w-1 bg-[#E7E9EA]">
            <span className="block h-full w-full rounded-br bg-black">
              &nbsp;
            </span>
          </span>
          <span className="absolute -right-1 bottom-0 h-2 w-1 bg-[#E7E9EA]">
            <span className="block h-full w-full rounded-bl bg-black">
              &nbsp;
            </span>
          </span>
          ผู้ว่าฯกทม.
        </button>
        <button className="xs:min-w-[105px] relative min-w-[96px] rounded-tr-md rounded-tl-md bg-[#484D51] py-1 text-lg font-medium text-[#9A9A9A] sm:min-w-[120px]">
          <span className="absolute -left-1 bottom-0 h-2 w-1 bg-[#484D51]">
            <span className="block h-full w-full rounded-br bg-black">
              &nbsp;
            </span>
          </span>
          <span className="absolute -right-1 bottom-0 h-2 w-1 bg-[#484D51]">
            <span className="block h-full w-full rounded-bl bg-black">
              &nbsp;
            </span>
          </span>
          ส.ก.
        </button>
      </div>
    </div>
  )
}

export default Header
