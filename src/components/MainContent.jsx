import "./cssfiles/MainContent.css";
import "./cssfiles/App.css";

export default function MainContent() {
  return (
    <section className="w-full flex justify-center">
      <div className="width-80 h-full mt-8 flex justify-between">
        <section className="perfect-width perfect-height bg-zinc-900"></section>
        <section className="perfect-width perfect-height">
          <h1 className="font-semibold text-2xl mb-5">Payment</h1>
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
            <button className="py-6 bg-white border border-black text-black rounded-lg hover:bg-gray-400 hover:text-white hover:border-0 perfect-width-form bg-transition">
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
