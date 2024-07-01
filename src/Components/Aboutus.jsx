import mission from "../assets/images/mission.png"
import vision from "../assets/images/vision.png"
import values from "../assets/images/values.png"
import AboutHero from "./AboutHero"

export default function Aboutus(){
    return (
        <div>
            {/* The Values Section */}
            <AboutHero/>
            <div className="flex justify-between w-[80%] m-auto my-14">
                <div className="w-[25%] text-center border-2 border-black-800 px-4 py-3">
                    <div className="flex justify-center">
                  <img src={mission} alt="" className="flex justify-center" width={80}/> 
                    </div>
                  <h3 className="text-[#39A7FF] text-2xl py-1.5">Mission</h3> 
                  <p>To ensure that your are free financially. To guide you through your finances and spending. To ensure that there are no unneccesary losses on your side due to minimal knowledge</p>
                </div>
                <div className="w-[25%] text-center border-2 border-black-800 px-4 py-3">
                    <div className="flex justify-center">
                    <img src={vision} alt="" width={80}/>
                    </div>
                    <h3 className="text-[#39A7FF] text-2xl py-1.5">Vision</h3>
                    <p>To become the greatest financial-guiding company. Become known not only locally but also worldwide. We believe in the quality of our work and we know that we are the best.</p>
                </div>
                <div className="w-[25%] text-center border-2 border-black-800 px-4 py-3">
                    <div className="flex justify-center">
                    <img src={values} alt="" width={80}/>
                    </div>
                    <h3 className="text-[#39A7FF] text-2xl py-1.5">Values</h3>
                    <p>We beleive in trust. We are very qualified in what we do and we can assure nothing but perfection. Complete honesty and transparency lies within all of our </p>
                </div>
            </div>
        </div>
    )
}