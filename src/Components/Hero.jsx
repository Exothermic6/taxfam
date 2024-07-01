import hero from "../assets/images/hero.jpg";

export default function Hero() {
    return (
        <div className="flex">
            <div className="bg-gradient-to-r from-blue-100 to-[#a8a8a6] h-[74vh] w-[54vw]">
                <h1 className="ml-3 text-5xl font-bold w-1/2 mt-8">Your <span className="text-[#39A7FF]">Financial Freedom</span> Is Our <span className="text-[#39A7FF]">Top Priority</span></h1>
                <p className="mt-8 ml-3 text-xl w-3/4">We are here for you. We are going to make sure that you are not bound by any monetary form. Filing all your taxes and returns, handling any money-related problems</p>
                <button className="bg-[#39A7FF] text-xl mt-6 ml-3 text-white py-1.5 px-3.5 rounded-full">Read More</button>
            </div>
            <div className="float-right">
                <img src={hero} alt="" className="w-[49vw] " />
            </div>
        </div>
    )
}