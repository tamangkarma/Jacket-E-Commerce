import ArrowButton from "../arrowButton";
import copoun from "/logo/copoun.png";
import { RxCross2 } from "react-icons/rx";

const NotificationBar = () => {
  return (
    <>
      <section className="flex gap-3 bg-blue-700 justify-center md:text-lg text-white items-center max-h-40 p-2 md:p-1 ">
        {/* copoun logo */}
        <div>
          <img className="h-3 md:h-5" src={copoun} alt="copoun ticket" />
        </div>

        {/* Offer */}
        <div>
          <p className="text-text13">30% off storewide — Limited time!</p>
        </div>

        {/* Shop now */}
        <div>
          <ArrowButton className="" label="Shop Now"/>
        </div>

        <button  className="absolute right-2">
          <RxCross2 />
        </button>
      </section>
    </>
  );
};

export default NotificationBar;
