import about from "../assets/images/about.jpg"


export default function AboutHero(){
    return (
        <div>
                <div className="flex ">
                <div className="w-[50%]">
                 <img src={about} alt="" width={600}/>
                </div>
                <div className="w-[50%]">
                    <h1 className="text-[#39A7FF] text-4xl mb-4">Who are we ?</h1>
                    <p>We are taxfam consulting limited, we provide :</p>
                        <ul>
                            <li>Book Keeping</li>
                            <li>Accounting</li>
                            <li>Internal Audit</li>
                            <li>Tax Filing</li>
                            <li>Tax planning</li>
                            <li>Risk Management</li>
                        </ul>
                        <p>We tailored to meet individual needs. We deal with all the day-to-day paperwork to create enough time for you to focus on what you do best to increse your revenues. We provide alll the reporting information needed while ensuring that akl the statutory requirements aree met on time. Engage us today and relief yourself the huge costs of non compliance and enjoy great practices of being fully compliant</p>
                </div>
            </div>
        </div>
    )
}