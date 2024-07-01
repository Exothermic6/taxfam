import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import about from "../assets/images/about.jpg"

export default function Services (){
    return (
        <div>
            <Nav/>
            <div>
                <div className="w-[90%] m-auto">
                <div className="flex gap-10 mb-10 pt-10">
                    <div className="h-[40vh] w-[50%] border-[#39A7FF] border ">
                        <img src={about} alt="" width={200} className="w-[100%] h-[100%]"/>
                    </div>
                    <div className="w-[50%]">
                        <h1 className="text-2xl text-[#39A7FF] w-[60%]">Book Keeping</h1>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increse your revenues. We provide all the reporting information needed while ensuring that all the statutory requirements are met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                    </div>
                </div>
                <div className="flex gap-10 mb-10">
                    <div className="w-[50%]">
                        <h1 className="text-2xl text-[#39A7FF]">Accounting Services</h1>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increase your revenues. We provide all the reporting information needed while ensuring that all the statutory requirements aree met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                    </div>
                    <div className="w-[50%] h-[40vh] border border-[#39A7FF]">
                    <img src={about} alt="" width={200} className="w-[100%] h-[100%]"/>
                    </div>
                </div>
                <div className="flex gap-10 mb-10">
                    <div className="w-[50%] h-[40vh] border border-[#39A7FF]">
                    <img src={about} alt="" width={200} className="w-[100%] h-[100%]"/>
                    </div>
                    <div className="w-[50%]">
                        <h1 className="text-2xl text-[#39A7FF]">Internal Audit</h1>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increase your revenues. We provide all the reporting information needed while ensuring that all the statutory requirements aree met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                    </div>
                </div>
                <div className="flex gap-10 mb-10">
                    <div className="w-[50%]">
                        <h1 className="text-2xl text-[#39A7FF]">Tax Filing</h1>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increase your revenues. We provide all the reporting information needed while ensuring that all the statutory requirements aree met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                    </div>
                    <div className="w-[50%] h-[40vh] border border-[#39A7FF]">
                    <img src={about} alt="" width={200} className="w-[100%] h-[100%]"/>
                    </div>
                </div>
                <div className="flex gap-10 mb-10">
                    <div className="w-[50%] h-[40vh] border border-[#39A7FF]">
                    <img src={about} alt="" width={200} className="w-[100%] h-[100%]"/>
                    </div>
                    <div className="w-[50%] mb-10">
                        <h1 className="text-2xl text-[#39A7FF]">Tax Planning</h1>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increase your revenues. We provide all the reporting information needed while ensuring that all the statutory requirements aree met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                    </div>
                </div>
                <div className="flex gap-10 pb-10">
                    <div className="w-[50%]">
                        <h1 className="text-2xl text-[#39A7FF]">Risk Management</h1>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increase your revenues. We provide all the reporting information needed while ensuring that all the statutory requirements aree met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                    </div>
                    <div className="w-[50%] h-[40vh] border border-[#39A7FF]">
                    <img src={about} alt="" width={200} className="w-[100%] h-[100%]"/>
                    </div>
                </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}