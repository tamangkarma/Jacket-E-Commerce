import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowButton from "../arrowButton";
import copoun from "/logo/copoun.png";
import { RxCross2 } from "react-icons/rx";

const NotificationBar = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/shop");
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section className="relative flex gap-3 bg-blue-700 justify-center md:text-lg text-white items-center max-h-40 p-2 md:p-1">
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
        <ArrowButton className="hidden md:inline-flex" variant="primary" label="Shop Now" onClick={handleShopClick} />
      </div>

      {/* Close button */}
      <button onClick={handleClose} className="absolute right-2">
        <RxCross2 size={18} />
      </button>
    </section>
  );
};

export default NotificationBar;
