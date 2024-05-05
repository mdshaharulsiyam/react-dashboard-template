import { Dropdown } from "semantic-ui-react";
import phone from '../../assets/phone.jpg'


const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" }
];


const Category = () => {
  return (
    <div>
      <div className="p-4">
      <p className="mt-2 ms-2 mb-2 text-gray-500">
        Category <span className="text-red-600 text-sm">(require)</span>
      </p>
      <div className="mb-4">
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          clearable
          options={countryOptions}
        />
      </div>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-1/2 rounded-sm"
        />
        <button className="btn btn-primary lg:w-40 rounded-sm">Search</button>
        <button className="btn btn-error lg:w-40 text-white rounded-sm">Reset</button>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-white px-4 pb-4">
        <div className=" bg-base-100 border-gray-300 border ">
          <div className="w-full overflow-hidden h-9/12">
            <img
            className="h-full w-full object-cover"
              src={phone}
              alt="Shoes"
            />
          </div>
          <div className="text-center">
            <h3 className="text-gray-500 text-base mb-0">name</h3>
            <h3 className="text-gray-800 mt-0 text-base">name-556454</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Category;