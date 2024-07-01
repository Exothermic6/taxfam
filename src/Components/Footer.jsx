import logo from "../assets/images/logo.png"
import email from "../assets/images/email.png";
import  phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import  twitter from "../assets/images/twitter.png";
function Footer() {
  return (
    <div className="pt-2 bg-blue-100 pb-4 text-lg ">
      <h2 className="text-center text-4xl font-bold">Subscribe to us today</h2>
      <div className="  container flex gap-7 justify-center pt-10 mx-auto">
        <input
          className="rounded-full bg-rose border-2  border-[#39A7FF] outline-none  py-4 px-6 w-[30%]"
          type="email"
          placeholder="Enter your email address"
        />
        <button className=" bg-[#39A7FF]  rounded-full font-bold text-[#fff] text-lg py-4 px-12">Subscribe</button>
      </div>
      <div className="w-[95%] container mx-auto flex gap-5 justify-between pt-10">
      <div className="w-40">
        <h1 className="font-bold text-center">TAXFAM</h1>
        <p className="w-60">
          We offer quality accounting services at very affordable prices.We offer a variety of services. Come and try our services today. We gat you.
        </p>
      </div>
      <div className="">
        <h3 className="font-bold">Our Services</h3>
        <ul>
        <li>Book Keeping</li>
        <li>Accounting Services</li>
        <li>Internal Audit</li>
        <li>Tax Filing</li>
        <li>Tax Planning</li>
        <li>Risk Management</li>
        </ul>
      </div>
      <div className="">
      <h3 className="font-bold text-lg">Help</h3>
      <ul>
        <li>Customer Support</li>
        <li>Terms& Conditions</li>
        <li>Privacy Policy</li>
        <li>Track Your Order</li>
      </ul>
      </div>
      <div className="">
      <h3 className="font-bold text-center">  Contact Us</h3>
      
        <div className="flex gap-2 pt-1">
      <img  width={35} src={email} alt="" />
         <h5>taxfam@taxfam.com</h5>
         </div>
         <div className="flex gap-2 pt-1">
        <img  width={35}src={phone} alt="" /> 
        <h5>254-700-333-333</h5>
        </div>
        <h4 className="text-center">Follow Us</h4>
        <div className="flex gap-4 justify-center">
        <img width={35} src={facebook} alt="" className="cursor-pointer"/>
        <img width={35} src={instagram} alt="" className="cursor-pointer"/>
        <img width={35} src={twitter} alt="" className="cursor-pointer"/>
        </div>
      
      </div>
    </div>
    </div>
  );
}
export default Footer;


