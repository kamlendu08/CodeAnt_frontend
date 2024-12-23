import SubtractImage0 from "../assets/Subtract0.svg";
import chevron_down from "../assets/chevron_down.svg";
import home from "../assets/home.svg";
import code from "../assets/code.svg";
import cloud from "../assets/cloud.svg";
import book from "../assets/book.svg";
import gear from "../assets/gear.svg";
import phone from "../assets/phone.svg";
import sign_out from "../assets/sign_out.svg";
import { Button } from "./ui/button";
const Dash_sidebar = () => {
    return (
        <div className="flex h-screen  flex-col justify-between border-r border-[#E9EAEB] p-4 w-[242px]">
            <div className="pl-2">
                <div className="flex items-center">
                    <div className="w-[28px] h-[31px]">
                        <img src={SubtractImage0} alt="CodeAnt AI Logo" />
                    </div>
                    <div className="text-text_blue text-[24px] sm:text-3xl font-satoshi ml-2">
                        CodeAnt AI
                    </div>
                </div>
                <div className="flex cursor-pointer justify-between mt-4  w-[202px] text-text_gray font-inter text-[16px] items-center rounded-[8px] border border-[#D5D7DA] py-2 px-3">
                    <div>UtkarshDhairyaPa...</div>
                    <div><img src={chevron_down}></img></div>
                </div>
                <div>
                    <Button className="flex w-[202px] font-inter mt-4 items-center  h-[40px] bg-[#1570EF] rounded-[8px] text-white text-[16px] gap-2">
                        <img src={home}></img>
                        Repositories
                    </Button>
                </div>
                <div className="flex cursor-pointer px-3 text-[#414651] font-semibold w-[202px] mt-2 items-center  h-[40px] bg-white text-[16px] gap-2 font-inter">
                    <img src={code}></img>
                    AI Code Review
                </div>
                <div className="flex cursor-pointer px-3 text-[#414651] font-semibold w-[202px] mt-2 items-center  h-[40px] bg-white text-[16px] gap-2 font-inter">
                    <img src={cloud}></img>
                    Cloud Security
                </div>
                <div className="flex cursor-pointer px-3 text-[#414651] font-semibold w-[202px] mt-2 items-center  h-[40px] bg-white text-[16px] gap-2 font-inter">
                    <img src={book}></img>
                    How to Use
                </div>
                <div className="flex cursor-pointer px-3 text-[#414651] font-semibold w-[202px] mt-2 items-center  h-[40px] bg-white text-[16px] gap-2 font-inter">
                    <img src={gear}></img>
                    Setting
                </div>
            </div>
            <div className="cursor-pointer pl-2">
                <div className="flex px-3 text-[#414651] font-semibold w-[202px] mt-2 items-center  h-[40px] bg-white text-[16px] gap-2 font-inter">
                    <img src={phone}></img>
                    support
                </div>
                <div className="flex px-3 text-[#414651] font-semibold w-[202px] mt-2 items-center  h-[40px] bg-white text-[16px] gap-2 font-inter">
                    <img src={sign_out}></img>
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Dash_sidebar