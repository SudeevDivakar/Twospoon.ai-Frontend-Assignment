import "./cssfiles/App.css";

export default function StepsSection() {
  return (
    <section className="w-full h-60 flex justify-center">
      <div className="width-80 h-full flex items-center justify-between">
        <div className="flex h-1/5">
          <div class="flex items-center h-full justify-center pr-2">
            <img class="rounded-full w-8" src="./loc_icon.jpg" alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium">Step 1</span>
            <span className="text-gray-500 font-bold">Address</span>
          </div>
        </div>
        <div className="flex h-1/5">
          <div class="flex items-center h-full justify-center pr-2">
            <img class="rounded-full w-8" src="./shipment_icon.jpg" alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium">Step 2</span>
            <span className="text-gray-500 font-bold">Shipping</span>
          </div>
        </div>
        <div className="flex h-1/5">
          <div class="flex items-center h-full justify-center pr-2">
            <img class="rounded-full w-8" src="./payment_icon.jpg" alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-900 font-medium">Step 3</span>
            <span className="text-zinc-900 font-bold">Payment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
