import { FooterInfoData, FooterPageData, FooterSocailData } from "./data";
import FooterBottom from "./footerBottom";
import JoinNews from "./JoinNews";

const Footer = () => {
  return (
    <footer className="bg-[#E8ECEF] text-black py-10 md:px-16">
      <div className="max-w-7xl px-[40px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div >
          <h1 className="text-h7  mb-4">3legant.</h1>
          <p className="text-text6 mb-4">43111 Hai Trieu street,</p>
          <p className="text-text6 mb-4">District 1, HCM City</p>
          <p className="text-text6 mb-4">Vietnam</p>
          <p className="text-text6 mb-4">84-756-3237</p>
          <div className="flex items-center gap-4 mt-2">
            {FooterSocailData.map((value, idx) => (
              <img
                key={idx}
                src={value.image}
                alt={`Social ${idx + 1}`}
                className="w-5 h-5 hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <ul className="space-y-6 text-text6">
            {FooterPageData.map((value, idx) => (
              <li key={idx} className="hover:underline cursor-pointer">
                {value.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Info</h2>
          <ul className="space-y-6 text-text6">
            {FooterInfoData.map((value, idx) => (
              <li key={idx} className="hover:underline cursor-pointer">
                {value.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Join Newsletter</h2>
          <JoinNews />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <FooterBottom/>
        </div>
    </footer>
  );
};

export default Footer;
