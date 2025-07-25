const ToolBar = () => {
  return (
    <section className="md:pt-16 pt-6 flex flex-col md:flex-row gap-4">
      {/* Categories */}
      <div>
        <h1 className="Inter text-text12 text-[#6C7275] mb-3">CATEGORIES</h1>
        <div className=" border rounded-md p-2 min-w-[20rem]">
          <select className="Inter text-text12 outline-none min-w-[18rem]  ">
            <option value="all">All</option>
            <option value="furniture">Jackets</option>
            <option value="decor">Hoodies</option>
            <option value="lighting">Sweater</option>
          </select>
        </div>
      </div>

      {/* Prices */}
      <div>
        <h1 className="Inter text-text12 text-[#6C7275] mb-3">PRICE</h1>
        <div className="border rounded-md p-2 min-w-[20rem]">
          <select className="Inter text-text12 outline-none min-w-[18rem] ">
            <option value="all">All Price</option>
            <option value="furniture">$50</option>
            <option value="decor">$200</option>
            <option value="lighting">$400</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ToolBar;
