import Nav from "../Components/Nav"
import Hero from "../Components/Hero"
import account1 from "../assets/images/acc-1.jpg"
import account2 from "../assets/images/acc-2.jpg"
import account3 from "../assets/images/acc-3.jpg"
import Footer from "../Components/Footer"
import AboutHero from "../Components/AboutHero"


export default function Home() {
    return (
        <div>
            <Nav />
            <Hero />

            {/* about section */}
            <div className="my-4">
            <AboutHero />
            <button className="rounded-full ">More</button>
            </div>

            <div className="mt-4">
                <h2 className="text-5xl text-[#39A7FF] text-center">Our Services</h2>
                <p className="text-center text-xl mt-4">Working On providing <span className="text-[#39A7FF]">the best</span> services</p>
            </div>
            <div className="mt-8 flex gap-20 justify-center mb-12">
                <div className="w-[19.2%]">
                    <div className="bg-gradient-to-r from-[#39A7FF] to-[#f8fdfe] text-white">
                        <h3 className="text-2xl">Book <br />Keeping </h3>
                    </div>
                    <img src={account1} alt="" className="w-60" />
                    <p>We file all kinds of returns. From nill returns to complex file returns.</p>
                    <button className="bg-[#39A7FF] text-white py-1.5 px-3.5 rounded-full cursor-pointer
                    ">Read More</button>
                </div>
                <div className="w-[19.2%]">
                    <div className="bg-gradient-to-r from-[#39A7FF] to-[#f8fdfe] text-white">
                        <h3 className="text-2xl">Accounting <br />Services</h3>
                    </div>
                    <img src={account3} alt="" className="w-60" />
                    <p>We file all kinds of returns. From nill returns to complex file returns.</p>
                    <button className="bg-[#39A7FF] text-white py-1.5 px-3.5 rounded-full cursor pointer">Read More</button>
                </div>
                <div className="w-[19.2%]">
                    <div className="bg-gradient-to-r from-[#39A7FF] to-[#f8fdfe] text-white">
                        <h3 className="text-2xl">Internal <br />Audit</h3>
                    </div>
                    <img src={account2} alt="" className="w-60" />
                    <p>We file all kinds of returns. From nill returns to complex file returns.</p>
                    <button className="bg-[#39A7FF] text-white py-1.5 px-3.5 rounded-full cursor-pointer">Read More</button>
                </div>
                <div className="w-[19.2%]">
                    <div className="bg-gradient-to-r from-[#39A7FF] to-[#f8fdfe] text-white">
                        <h3 className="text-2xl">Tax <br />Filing</h3>
                    </div>
                    <img src={account1} alt="" className="w-60" />
                    <p>We file all kinds of returns. From nill returns to complex file returns.</p>
                    <button className="bg-[#39A7FF] text-white py-1.5 px-3.5 rounded-full cursor-pointer">Read More</button>
                </div>
            </div>
            <div className="flex justify-center mb-10">
            <button className="bg-[#39A7FF] rounded-full py-3 px-6">
                <h3 className="text-5xl text-white">More Services</h3>
            </button>
            </div>


            <Footer/>
        </div>
    )
}

