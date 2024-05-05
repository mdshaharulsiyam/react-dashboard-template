import { useState } from "react";
import useRoleAccessApi from "../../Api/useRoleAccessApi";
import Loader from "../../Utility/Loader/Loader";
import Title from "../../Utility/TItle/Title";

const NewRole = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [roleCheckedItems, setRoleCheckedItems] = useState({});
  const [memberCheckedItems, setMemberCheckedItems] = useState({});
  const [floorCheckedItems, setFloorCheckedItems] = useState({});
  const [businessCheckedItems, setBusinessCheckedItems] = useState({});
  const [serviceCheckedItems, setServiceCheckedItems] = useState({});
  const [shopCheckedItems, setShopCheckedItems] = useState({});
  const [expenseCheckedItems, setExpenseCheckedItems] = useState({});
  const [expenseCategoryCheckedItems, setExpenseCategoryCheckedItems] = useState({});
  const [expenseReceiptCheckedItems, setExpenseReceiptCheckedItems] = useState({});
  const [blogCheckedItems, setBlogCheckedItems] = useState({});
  const [reportCheckedItems, setReportCheckedItems] = useState({});
  const [notificationCheckedItems, setNotificationCheckedItems] = useState({});
  const [settingCheckedItems, setSettingCheckedItems] = useState({});

  const [accessRole, loading] = useRoleAccessApi();
  console.log(accessRole)
  const userAccess = accessRole?.filter(
    (item) => item.group_name === "user-access"
  );
  const roleAccess = accessRole?.filter(
    (item) => item.group_name === "role-access"
  );
  const memberAccess = accessRole?.filter(
    (item) => item.group_name === "member-access"
  );
  const floorAccess = accessRole?.filter(
    (item) => item.group_name === "floor-access"
  );
  const businessAccess = accessRole?.filter(
    (item) => item.group_name === "business-type-access"
  );
  const serviceAccess = accessRole?.filter(
    (item) => item.group_name === "service-charge-access"
  );
  const shopAccess = accessRole?.filter(
    (item) => item.group_name === "shop-access"
  );
  const expenseAccess = accessRole?.filter(
    (item) => item.group_name === "expense-access"
  );
  const expenseCategoryAccess = accessRole?.filter(
    (item) => item.group_name === "expense-category-access"
  );
  const expenseReceiptAccess = accessRole?.filter(
    (item) => item.group_name === "expense-receipt-access"
  );
  const blogAccess = accessRole?.filter(
    (item) => item.group_name === "blog-access"
  );
  const reportAccess = accessRole?.filter(
    (item) => item.group_name === "report-access"
  );
  const notificationAccess = accessRole?.filter(
    (item) => item.group_name === "push-notification-access"
  );
  const settingAccess = accessRole?.filter(
    (item) => item.group_name === "setting-access"
  );

  const handleCreateRole = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const checkedValues = [];

    const newRole = formData.get("role");
    for (const [key, value] of formData.entries()) {
      if (value !== "") {
        checkedValues.push;
      }
    }

    console.log("Checked Checkboxes:", checkedValues, newRole);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Title title="New Role" />
      <form onSubmit={handleCreateRole} className="border p-3">
        <label className="text-sm font-semibold">
          Role Name <span className="text-red-500">(required)</span>
        </label>
        <input
          type="text"
          name="role"
          className="border text-gray-900 text-sm rounded-sm block w-full p-2.5 focus:outline-none"
          placeholder="Enter Role"
          required
        />
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input
              type="checkbox"
              className="mr-2"
              id=""
              checked={Object.values(checkedItems).every(Boolean)}
              onChange={(e) => {
                const checked = e.target.checked;
                setCheckedItems(
                  userAccess.reduce((acc, item) => {
                    acc[item.name] = checked;
                    return acc;
                  }, {})
                );
              }}
            />
            <span className="mb-[2px]">User-access</span>
          </div>
          <div className="w-3/4">
            {userAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                  checked={checkedItems[item.name] || false}
                  onChange={(e) =>
                    setCheckedItems({
                      ...checkedItems,
                      [item.name]: e.target.checked,
                    })
                  }
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" id=""
              checked={Object.values(roleCheckedItems).every(Boolean)}
              onChange={(e) => {
                const checked = e.target.checked;
                setRoleCheckedItems(
                  roleAccess.reduce((acc, item) => {
                    acc[item.name] = checked;
                    return acc;
                  }, {})
                );
              }} />
            <span className="mb-[2px]">Role-access</span>
          </div>
          <div className="w-3/4">
            {roleAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                  checked={roleCheckedItems[item.name] || false}
                  onChange={(e) =>
                    setRoleCheckedItems({
                      ...roleCheckedItems,
                      [item.name]: e.target.checked,
                    })
                  }
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" id=""
              checked={Object.values(memberCheckedItems).every(Boolean)}
              onChange={(e) => {
                const checked = e.target.checked;
                setMemberCheckedItems(
                  roleAccess.reduce((acc, item) => {
                    acc[item.name] = checked;
                    return acc;
                  }, {})
                );
              }} />
            <span className="mb-[2px]">Member-access</span>
          </div>
          <div className="w-3/4">
            {memberAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                  checked={memberCheckedItems[item.name] || false}
                  onChange={(e) =>
                    setMemberCheckedItems({
                      ...memberCheckedItems,
                      [item.name]: e.target.checked,
                    })
                  }
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" id=""
              checked={Object.values(floorCheckedItems).every(Boolean)}
              onChange={(e) => {
                const checked = e.target.checked;
                setFloorCheckedItems(
                  roleAccess.reduce((acc, item) => {
                    acc[item.name] = checked;
                    return acc;
                  }, {})
                );
              }}
            />
            <span className="mb-[2px]">Floor-access</span>
          </div>
          <div className="w-3/4">
            {floorAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                  checked={floorCheckedItems[item.name] || false}
                  onChange={(e) =>
                    setFloorCheckedItems({
                      ...floorCheckedItems,
                      [item.name]: e.target.checked,
                    })
                  }
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" id=""
              checked={Object.values(expenseCheckedItems).every(Boolean)}
              onChange={(e) => {
                const checked = e.target.checked;
                setExpenseCheckedItems(
                  roleAccess.reduce((acc, item) => {
                    acc[item.name] = checked;
                    return acc;
                  }, {})
                );
              }}
            />
            <span className="mb-[2px]">Expense-access</span>
          </div>
          <div className="w-3/4">
            {expenseAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  checked={expenseCheckedItems[item.name] || false}
                  onChange={(e) =>
                    setExpenseCheckedItems({
                      ...expenseCheckedItems,
                      [item.name]: e.target.checked,
                    })
                  }
                  id=""
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" id="" />
            <span className="mb-[2px]">Expense-category-access</span>
          </div>
          <div className="w-3/4">
            {expenseCategoryAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" name="user" id="" />
            <span className="mb-[2px]">Expense-receipt-access</span>
          </div>
          <div className="w-3/4">
            {expenseReceiptAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" name="user" id="" />
            <span className="mb-[2px]">Blog-access</span>
          </div>
          <div className="w-3/4">
            {blogAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" name="user" id="" />
            <span className="mb-[2px]">Blog-access</span>
          </div>
          <div className="w-3/4">
            {reportAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex items-center text-lg w-1/4">
            <input type="checkbox" className="mr-2" name="user" id="" />
            <span className="mb-[2px]">Setting-access</span>
          </div>
          <div className="w-3/4">
            {settingAccess?.map((item, idx) => (
              <li className="list-none flex items-center text-lg" key={idx}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.name}
                  id=""
                />
                <span className="mb-[2px]">{item.name}</span>
              </li>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-1 rounded-sm bg-green-500 text-white hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewRole;
