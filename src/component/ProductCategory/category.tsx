import { CategoryData } from "./data";

const Category = () => {
  return (
    <div className="md:px-[160px] px-4 py-10  flex flex-col items-center justify-center gap-6">
      <h1 className="md:text-h4 text-h5 mb-4 Poppins">
        <span className="block md:inline text-center">Shop </span>
        by Categories
      </h1>

      {/* Products Category */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {CategoryData.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img
              src={value.image}
              alt={value.title}
              className="w-[150px]  object-cover rounded-full"
            />

            <h2 className="text-text13 Inter">{value.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
