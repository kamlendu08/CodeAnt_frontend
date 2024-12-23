
import SubtractImage0 from '../assets/Subtract0.svg';
import SubtractImage from '../assets/Subtract.svg';
import Group8 from '../assets/Group8.svg';

const LoginSidebar = () => {
    return (
        <div className='bg-white h-full relative hidden lg:block'>
            <div className='absolute mt-[319px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='relative'>
                    <div className='mb-[-12px]'>
                        <Box1 />
                    </div>
                    <div className='absolute bottom-[-150px] right-[-18px]'>
                        <Box2 />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[-40px] left-0 w-[260px] h-[319px]">
                <img src={SubtractImage} alt="Bottom Left" className="w-full h-full" />
            </div>
        </div>
    )
}

function Box1() {
    return (
        <div className="w-[447px] h-[170px] py-[21px] shadow-custom rounded-[24px] bg-white">
            <div className='flex items-center ml-[22px]'>
                <div className='w-[28px] h-[31px]'>
                    <img src={SubtractImage0} alt="Subtract" />
                </div>
                <div className='text-text_blue font-bold text-lg font-inter ml-2'>AI to Detect & Autofix Bad Code</div>
            </div>
            <hr className='w-full mt-[21px] bg-light_gray' />
            <div className='flex'>
                <SubBox num={30} tag={"Language Support"} />
                <div className='ml-4'>
                    <SubBox num={'10K'} tag={"Developers"} />
                </div>
                <div className='ml-8'>
                    <SubBox num={'100K'} tag={"Hours Saved"} />
                </div>
            </div>
        </div>
    )
}

function Box2() {
    return (
        <div className="w-[265px] h-[164px] py-[15.21px] shadow-custom rounded-[24px] bg-white">
            <div className='flex items-center justify-center h-full'>
                <div className='w-[204px] h-[133.37px]'>
                    <img src={Group8} alt="Group 8" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

function SubBox({ num, tag }) {
    return (
        <div className='text-center ml-[22px] mt-[21px] items-center'>
            <div className='font-inter font-bold text-lg text-text_blue'>{num}+</div>
            <div className='font-inter font-normal text-sm text-light_text'>{tag}</div>
        </div>
    )
}

export default LoginSidebar;

