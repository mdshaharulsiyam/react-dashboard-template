import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { IoMdPersonAdd } from "react-icons/io";
import PosModal from "./PosModal";
import Btn from "../../Components/Shared/Btn/Btn";
import IconBtn from "../../Components/Shared/Btn/IconBtn";
import { CiBadgeDollar } from "react-icons/ci";


const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];

const PosTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex-1 border border-gray-300 rounded-md p-4">
      <p className="mt-2 ms-2 mb-2 text-gray-500">
        Supplier<sup className="text-red-600">*</sup>{" "}
      </p>
      <div className="flex gap-2">
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          clearable
          options={countryOptions}
          style={{
            borderRadius: "3px",
            boxShadow: "none",
            border: "1px solid #F3D0D7",
          }}
        />

        <div onClick={() => setIsOpen(true)}>
          <IconBtn icon={<IoMdPersonAdd />} />
        </div>
      </div>
      <div className="overflow-x-auto mt-2">
        <table className="table border dark:border-black">
          {/* head */}
          <thead>
            <tr className="uppercase text-center font-bold text-black bg-[#F2F2F2] dark:bg-base-100 dark:border-black text-lg dark:text-white">
              <th className=" ">Product</th>
              <th className="border dark:border-black uppercase">mrp</th>
              <th className="border dark:border-black uppercase">sell price</th>
              <th className="border dark:border-black uppercase">qty</th>
              <th className="border dark:border-black uppercase">
                total price
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            {/* row 1 */}
            <tr>
              <th
                className={`px-6 pt-2 font-medium whitespace-nowrap text-center text-lg border dark:border-black text-black dark:text-white `}
              >
                Beauty
              </th>

              <td className="border dark:border-black">
                <h4>67</h4>
              </td>
              <td className="border dark:border-black">
                <h4>500</h4>
              </td>
              <td className="border dark:border-black">
                <h4>1</h4>
              </td>
              <td className="border dark:border-black">
                <h4>500</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-5">
       <Btn text="Pay Bill" />

      </div>
      <PosModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default PosTable;
