import logo from "../assets/images/logo1.jpg"


export default function Nav(){
    return(
        <div className="bg-blue-100">
            <div className="w-[96%] m-auto">
            <div className="flex justify-between py-4 text-lg">
            <div className="cursor-pointer">
            <img src={logo} alt="img" className="w-20"/>
            </div>
            <div>
                <ul className="flex justify-between text-xl gap-40 items-center h-12">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About Us</li>
                    <li className="cursor-pointer">Services</li>
                </ul>
            </div>
            <div>
                <ul className="">
                    <li className="bg-[#39A7FF] text-white py-1.5 px-3.5 rounded-full cursor-pointer">Contact Us</li>
                </ul>
            </div>
            </div>     
            </div>
        </div>
    )
}


