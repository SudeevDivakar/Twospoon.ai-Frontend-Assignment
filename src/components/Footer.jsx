import "./cssfiles/App.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="w-full mt-12 bg-black flex justify-center items-center flex-col">
        <section className="width-80 flex justify-between mt-24">
          <div className="width-30">
            <h1 className="font-semibold text-white text-4xl mb-5">cyber</h1>
            <h3 className="text-gray-400 text-sm">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than{" "}
            </h3>
          </div>

          <div className="flex flex-col width-30">
            <h1 className="font-semibold text-white text-2xl mb-1">Services</h1>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Bonus program</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Gift cards</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Credit and payment</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Service contracts</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Non-cash account</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Payment</h3>
            </a>
          </div>

          <div className="flex flex-col width-30">
            <h1 className="font-semibold text-white text-2xl mb-1">
              Assistance to the buyer
            </h1>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Find an order</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Terms of delivery</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Exchange and return of goods</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Guarantee</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Frequently asked questions</h3>
            </a>
            <a className="text-gray-400 text-sm hover:text-white" href="#">
              <h3 className="mt-2 mb-2">Terms of use of the site</h3>
            </a>
          </div>
        </section>
        <div className="width-80 flex mb-24">
          <a href="#">
            <FaTwitter class="text-white mr-8" />
          </a>
          <a href="#">
            <FaFacebookF class="text-white mr-8" />
          </a>
          <a href="#">
            <FaTiktok class="text-white mr-8" />
          </a>
          <a href="#">
            <AiFillInstagram class="text-white mr-8" />
          </a>
        </div>
      </section>
    </>
  );
}
