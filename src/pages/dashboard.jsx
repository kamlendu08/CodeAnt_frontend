import plus from "../assets/plus.svg";
import refresh from "../assets/refresh.svg";
import Ellipse from "../assets/Ellipse.svg";
import database from "../assets/database.svg";
import { Button } from "../components/ui/button";
import datas from "../api/data";
import Dash_sidebar from "../components/dashboard_sidebar";
import Navbar from "../components/navbar";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="block lg:hidden">
            <Navbar />
            </div>
            <div className="flex-grow">
                <Repositories />
            </div>
        </div>
    )
}

function Repositories() {
    return (
        <div className="flex h-full">
            <div className="hidden lg:block">
                <Dash_sidebar />
            </div>
            <div className="flex-1 overflow-auto">
                <div className="flex justify-center lg:min-h-full lg:bg-whitebg">
                    <div className="bg-white lg:m-12 w-full lg:rounded-[12px] border lg:border-[#E9EAEB]">
                        <div className="flex flex-col justify-start md:flex-row md:justify-between md:items-center gap-4 p-4">
                            <div className="flex flex-col">
                                <div className="font-inter text-[24px] font-semibold text-[#181D27]">
                                    Repositories
                                </div>
                                <div className="font-inter font-normal text-[#414651] text-[14px]">33 total repositories</div>
                            </div>
                            <div className="flex gap-4">
                                <Button className="flex shadow-sm p-2 justify-center items-center w-40 h-[40px] text-[14px] text-[#414651] font-inter font-light  bg-white rounded-[8px] border border-[#D5D7DA] gap-2">
                                    <img src={refresh} alt="Refresh" />
                                    Refresh All
                                </Button>

                                <Button className="flex justify-center items-center w-40  h-[40px] bg-[#1570EF] font-light rounded-[8px] text-white text-[14px] gap-2">
                                    <img src={plus} alt="Add" />
                                    Add Repository
                                </Button>
                            </div>
                        </div>
                        <div className="max-w-md mx-4">
                            <label htmlFor="search-input" className="sr-only">Search</label>
                            <div className="relative z-10">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    id="search-input"
                                    type="search"
                                    placeholder="Search Repositories"
                                    className="block w-full pl-10 pr-4 py-2 text-sm  border border-gray-300 rounded-lg bg-white focus:ring-[#D5D7DA] focus:border-[#D5D7DA] shadow-sm outline-none"
                                />
                            </div>
                        </div>
                        <hr className="mt-4" />
                        {datas.map((ele) => (
                            <div key={ele.name}>
                                <Tile name={ele.name} lang={ele.lang} size={ele.size} publicc={ele.public} update={ele.update} />
                                {ele.name !== "social-network" && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Tile({ name, lang, size, update, publicc }) {
    return (
        <div className="flex flex-col px-4 py-[16px] hover:bg-[#F5F5F5] cursor-pointer gap-2">
            <div className="flex items-center gap-2">
                <div className="font-inter text-[16px] sm:text-[20px] text-text_gray">
                    {name}
                </div>
                <div className=" text-center w-[59px] h-[24px] text-[14px] font-inter text-[#175CD3] rounded-[9999px] border border-[#B2DDFF] bg-[#EFF8FF]">
                    {publicc ? 'Public' : 'Private'}
                </div>
            </div>
            <div className="flex items-center gap-9">
                <div className="flex font-inter text-[12px] sm:text-[16px] text-text_gray gap-2">
                    {lang}
                    <img src={Ellipse} alt="Language" />
                </div>
                <div className="flex font-inter text-[12px] sm:text-[16px] text-text_gray gap-2">
                    <img src={database} alt="Size" />
                    {size}
                </div>
                <div className=" font-inter text-[12px] sm:text-[16px] text-text_gray gap-2">
                    {update}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

