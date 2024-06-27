export default function StepsSection() {
  return (
    <section className="w-full h-60 flex justify-center">
      <div className="w-3/4 h-full flex items-center justify-between">
        <div className="flex h-1/5">
          <div class="flex items-center h-full justify-center pr-2">
            <img class="rounded-full w-8" src="./loc_icon.jpg" alt="" />
          </div>
          <a href="#">
            <div className="flex flex-col">
              <span className="text-gray-500 font-medium">Step 1</span>
              <span className="text-gray-500 font-bold">Address</span>
            </div>
          </a>
        </div>
        <div className="flex h-1/5">
          <div class="flex items-center h-full justify-center pr-2">
            <img class="rounded-full w-8" src="./shipment_icon.jpg" alt="" />
          </div>
          <a href="#">
            <div className="flex flex-col">
              <span className="text-gray-500 font-medium">Step 2</span>
              <span className="text-gray-500 font-bold">Shipping</span>
            </div>
          </a>
        </div>
        <div className="flex h-1/5">
          <div class="flex items-center h-full justify-center pr-2">
            <img class="rounded-full w-8" src="./payment_icon.jpg" alt="" />
          </div>
          <a href="#">
            <div className="flex flex-col">
              <span className="text-zinc-900 font-medium">Step 3</span>
              <span className="text-zinc-900 font-bold">Payment</span>
            </div>
          </a>
        </div>
        {/* <span className="text-slate-50">hi</span>
        <span className="text-slate-50">hi</span>
        <span className="text-slate-50">hi</span> */}
      </div>
    </section>
  );
}
