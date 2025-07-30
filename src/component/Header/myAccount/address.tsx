import { Pencil } from 'lucide-react';

const AddressSection = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Address</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Billing Address */}
        <div className="border rounded-md p-4 shadow-sm w-full sm:w-1/2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">Billing Address</h3>
            <button className="flex items-center text-sm text-gray-500 hover:text-black">
              <Pencil size={14} className="mr-1" />
              Edit
            </button>
          </div>
          <p className="text-sm">Sofia Havertz</p>
          <p className="text-sm">(+1) 234 567 890</p>
          <p className="text-sm">345 Long Island, NewYork, United States</p>
        </div>

        {/* Shipping Address */}
        <div className="border rounded-md p-4 shadow-sm w-full sm:w-1/2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">Shipping Address</h3>
            <button className="flex items-center text-sm text-gray-500 hover:text-black">
              <Pencil size={14} className="mr-1" />
              Edit
            </button>
          </div>
          <p className="text-sm">Sofia Havertz</p>
          <p className="text-sm">(+1) 234 567 890</p>
          <p className="text-sm">345 Long Island, NewYork, United States</p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
