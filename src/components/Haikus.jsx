import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiChartBar, HiAcademicCap, HiOutlineShare } from "react-icons/hi";
import { BsFillBrushFill, BsFillChatSquareFill, BsFillCalendarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User/Stats", link: "/", icon: AiOutlineUser },
    { name: "Messages", link: "/", icon: BsFillChatSquareFill },
    { name: "Calender", link: "/", icon: BsFillCalendarFill, margin: true },
    { name: "Create a poem", link: "/", icon: BsFillBrushFill },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Ranking", link: "/", icon: HiChartBar },
    { name: "Learn to write", link: "/", icon: HiAcademicCap },
    { name: "Share", link: "/", icon: HiOutlineShare },
    { name: "Settings", link: "/", icon: GoGear },

  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0a0a0a] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col bg-black gap-4 relative rounded-xl">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2  hover:bg-blue-700 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-white font-semibold">
        Haiku Page
      </div>
    </section>
  );
};

export default Home;