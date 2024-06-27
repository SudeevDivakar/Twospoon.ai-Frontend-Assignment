import "./cssfiles/MainContent.css";
import "./cssfiles/App.css";

export default function MainContent() {
  return (
    <section className="w-full flex justify-center">
      <div className="width-80 h-full mt-8 flex justify-between">
        <section className="perfect-width border-2 rounded-lg flex flex-col">
          <section className="width-90 flex flex-col self-center items-center">
            <h1 className="w-full text-2xl font-semibold mt-7 mb-3">Summary</h1>
            <div className="bg-gray-100 w-full flex my-2 rounded-xl justify-around py-3 pl-3 pr-5 items-center">
              <img className="w-12" src="./iphone.jpg" alt="" />
              <h2 className="grow ml-5">Apple iPhone 14 Pro Max 128Gb</h2>
              <h2 className="font-bold">$1399</h2>
            </div>
            <div className="bg-gray-100 w-full flex my-2 rounded-xl justify-around py-3 pl-3 pr-5 items-center">
              <img
                className="w-12 rounded-full"
                src="./headphones.jpg"
                alt=""
              />
              <h2 className="grow ml-5">AirPods Max Silver</h2>
              <h2 className="font-bold">$549</h2>
            </div>
            <div className="bg-gray-100 w-full flex my-2 rounded-xl justify-around py-3 pl-3 pr-5 items-center">
              <img className="w-12 rounded-full" src="./watch.jpg" alt="" />
              <h2 className="grow ml-5">Apple Watch Series 9 GPS 41mm</h2>
              <h2 className="font-bold">$399</h2>
            </div>
            <h2 className="w-full mt-2 mb-2 text-gray-600">Address</h2>
            <h3 className="w-full mb-3">
              1131 Dusty Townline, Jacksonville, TX 40322
            </h3>
            <h2 className="w-full mt-2 mb-2 text-gray-600">Shipment method</h2>
            <h3 className="w-full">Free</h3>
            <div className="w-full flex justify-between mt-6">
              <h2 className="font-semibold">Subtotal</h2>
              <h2 className="font-semibold">$2347</h2>
            </div>
            <div className="w-full flex justify-between mt-6">
              <h3 className="text-gray-500">Estimated Tax</h3>
              <h3 className="font-semibold">$50</h3>
            </div>
            <div className="w-full flex justify-between mt-5">
              <h3 className="text-gray-500">Estimated shipping & Handling</h3>
              <h3 className="font-semibold">$29</h3>
            </div>
            <div className="w-full flex justify-between mt-6">
              <h2 className="font-semibold">Total</h2>
              <h2 className="font-bold">$2426</h2>
            </div>
          </section>
        </section>
        <section className="perfect-width">
          <h1 className="font-bold text-2xl mb-5">Payment</h1>
          <a className="mr-10 py-1 border-b-2 border-b-black" href="#">
            <span>Credit Card</span>
          </a>
          <a
            className="mr-10 py-1 text-gray-500 bottom-transition-border"
            href="#"
          >
            <span>PayPal</span>
          </a>
          <a className="py-1 text-gray-500 bottom-transition-border" href="#">
            <span>PayPal Credit</span>
          </a>
          <img className="card-width mt-10" src="./creditcard.png" alt="" />
          <input
            type="text"
            placeholder="Cardholder Name"
            className="rounded-lg border-2 pl-5 w-full py-3 mt-10"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="rounded-lg border-2 pl-5 w-full py-3 mt-4"
          />
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Exp.Date"
              className="rounded-lg border-2 pl-5 perfect-width-form py-3 mt-4"
            />
            <input
              type="text"
              placeholder="CVV"
              className="rounded-lg border-2 pl-5 perfect-width-form py-3 mt-4"
            />
          </div>
          <div className="mt-12 mb-12 font-semibold">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black" />
              <span className="ml-2 text-gray-700">
                Same as billing address
              </span>
            </label>
          </div>
          <div className="flex justify-between">
            <button className="py-6 bg-white border border-black text-black rounded-lg hover:bg-gray-400 hover:text-white perfect-width-form bg-transition">
              Back
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-500 perfect-width-form bg-transition">
              Pay
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
