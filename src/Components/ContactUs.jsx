import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

export default function ContactUs(){
    return (
        <div>
            <div className="bg-blue-100 py-8">
                <h2 className="text-center text-3xl mb-6">Get In Touch With Us Today</h2>
                <div className="flex w-[80%] m-auto rounded-lg ">
                <div className="w-[39%] rounded-lg p-6 text-white bg-[#39A7FF]">
                    <h2 className="text-2xl my-3">You Can reach us through</h2>
                    <div className="flex mb-3 gap-2 items-center">
                        <img src={phone} alt="" width={40}/>
                        <p>+254 712345678</p>
                    </div>
                    <div className="flex mb-3 gap-2 items-center">
                        <img src={email} alt="" width={40}/>
                        <p>taxfam254@taxfam.com</p>
                    </div>
                    <div className="flex mb-3 gap-2 items-center">
                        <img src={instagram} alt="" width={40}/>
                        <p>@_taxfam_</p>
                    </div>
                    <div className="flex mb-3 gap-2 items-center">
                        <img src={twitter} alt="" width={40}/>
                        <p>@taxfam</p>
                    </div>
                    <div className="flex mb-3 gap-2 items-center">
                        <img src={facebook} alt="" width={40}/>
                        <div>
                        <p>123 fourth avenue street</p>
                        <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
                <div className="w-[61%] p-4 bg-white ">
                    <h2 className="text-center text-2xl my-3">Contact Us</h2>
                    <p className="text-xl text-center mb-3 text-[#39A7FF]">We would love to hear from you</p>
                    <div className="w-[80%] m-auto">
                    <div className="flex gap-10 mb-3">
                        <div>
                            <p>Enter your name</p>
                        <input type="text" className="outline-none border-b border-black"/>
                        </div>
                        <div>
                            <p>Enter your last name</p>
                        <input type="text" className="outline-none border-b border-black"/>
                        </div>
                    </div>
                    <div className="flex gap-10 mb-3">
                        <div>
                        <p>Enter your email address</p>
                    <input type="email" className="outline-none border-b border-black"/>
                        </div>
                        <div>
                            <p>Enter our phone number</p>
                            <div className="flex gap-2">
                            <p>+254</p>
                            <input type="text" className="border-b border-black outline-none"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-conter">Enter your message here</p>
                    <input type="text" placeholder="Enter your message here" className="w-[70%] h-[20vh]"/>
                    </div>
                    <input type="submit" placeholder="Send Message" className="cursor-pointer bg-[#39A7FF] text-white rounded full px-4 py-1 my-2"/>
                    <p>Subscribe to get our latest news</p>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}