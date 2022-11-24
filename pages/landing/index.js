import Image from "next/image";
import logo from "../../public/images/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <>
      <header className={`${styles.header} h-screen md:h-full`}>
        <div className={`${styles.navContainer} text-white`}>
          <nav className="flex items-center justify-between py-8 cursor-pointer">
            <span className="md:hidden flex text-lg">
              <AiOutlineMenu />
            </span>
            <div className="flex items-center gap-5">
              <Image
                src={logo}
                alt="brandzoosLogo"
                className="object-contain w-40"
              />
              <div className="md:flex items-center gap-5 hidden ">
                <p>Home</p>
                <p>Brands</p>
                <p>Products</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <AiOutlineHeart />
                  <span
                    style={{ fontSize: " 7px" }}
                    className="absolute  -top-1 -right-1 w-fit px-1  bg-[#fb7e15] rounded-full"
                  >
                    2
                  </span>
                </div>
                <p className="md:flex hidden">Wishlist</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegUser />
                <div className="md:flex items-center hidden">
                  <p>Account</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </nav>

          {/* search  section*/}
          <div className={`${styles.searchContainer} lg:pt-32 md:pt-20 pt-8 `}>
            <h1 className="md:text-6xl text-4xl font-semibold text-center">
              Search for brands. Anywhere.
            </h1>
            <p className="text-center md:py-10 py-5">
              Discover that business around you.
            </p>

            <div
              className={`${styles.actionButContainer} flex flex-col gap-3 text-black`}
            >
              <input
                type={"text"}
                className="outline-none rounded-lg py-3 px-5 "
                placeholder="Search keyword e.g fashion"
              />
              <input
                type={"text"}
                placeholder="Location"
                className="outline-none rounded-lg py-3 px-5 "
              />
              <div className="flex items-center justify-center">
                <button className="bg-c-red w-fit  py-2 px-8 font-medium rounded-xl text-white">
                  Search
                </button>
              </div>
            </div>
            <div className=" hidden md:flex items-center bg-c-red rounded-full">
              <div className="flex flex-1 items-center bg-white text-black rounded-l-full p-4 px-5 gap-3">
                <input
                  type={"text"}
                  className="flex-1 outline-none bg-transparent"
                  placeholder="Search keyword e.g fashion"
                />
                <input
                  type={"text"}
                  className="border-l-2 pl-3 outline-none bg-transparent lg:flex-1"
                  placeholder="Location"
                />
              </div>
              <span className="text-center px-4 cursor-pointer">
                <FiSearch />
              </span>
            </div>

            {/* dropdown filters */}
            <div className="hidden md:flex items-center justify-center gap-4 py-5 pb-10">
              <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
                <p>Fashion</p>
                <MdKeyboardArrowDown />
              </div>

              <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
                <p>Food</p>
                <MdKeyboardArrowDown />
              </div>

              <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
                <p>Services</p>
                <MdKeyboardArrowDown />
              </div>
              {/* <div className="flex items-center gap-1 border border-white rounded-full px-3  py-1">
                <p>Health & Beauty</p>
                <MdKeyboardArrowDown />
              </div> */}

              <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
                <p>More</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, vitae.
        Quae consectetur, ratione consequuntur quisquam eos quasi nulla
        assumenda reprehenderit possimus? Corrupti, deleniti! Vitae quis
        obcaecati suscipit laborum voluptates ut nemo rerum aliquid accusantium,
        sint odio fugiat in vel ullam magni quos et dolorum enim molestias quas!
        Qui quis fugiat praesentium. Sit porro asperiores, facere atque totam
        vero voluptas quam non ut sint facilis. Sint ducimus dolor optio
        obcaecati, quam distinctio officiis modi numquam et aperiam architecto
        ullam a, nulla, amet tenetur temporibus unde excepturi doloribus velit
        expedita praesentium voluptate pariatur. Minima iure mollitia odit quia
        explicabo cum accusantium provident.
      </p>
    </>
  );
};

export default Landing;
