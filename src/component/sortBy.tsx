import { ToolBarData } from "../data/toolBar";

const SortBy = () => {
  return (
    <>
      <section className="flex justify-between items-center border border-gray-200 md:border-none md:mt-[5.3rem] mt-6 max-h-12 p-[3px] min-w-[20rem] rounded-md">
        <div className="">
          <select className="Inter text-text12 outline-none w-20">
            <option value="">Sort by</option>
            <option value="">Classic</option>
            <option value="">New Arrival</option>
            <option value="">Popular</option>
          </select>
        </div>
        <button className="grid grid-cols-2 md:grid-cols-4">
          {ToolBarData.map((value, idx) => (
            <button
              key={idx}
              className={`border border-gray-200  p-[4px] ${
                idx <= 1 ? "hidden sm:block" : ""
              }`}
            >
              <img
                className={`${idx <= 1 ? "hidden sm:block " : ""}`}
                src={value.image}
                alt=""
              />
            </button>
          ))}
        </button>
      </section>
    </>
  );
};

export default SortBy;
