import { useState } from "react";
import useRoleAccessApi from "../../Api/useRoleAccessApi";
import Loader from "../../Utility/Loader/Loader";
import Title from "../../Utility/TItle/Title";
import { Checkbox } from "primereact/checkbox";

const NewRoleSample = () => {
    const [checked, setChecked] = useState(false);
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="dark:text-white">
            <Title title="New Role" />
            <form className="border dark:border-gray-400 p-3">
                <label className="text-sm font-semibold">
                    Role Name <span className="text-red-500 dark:text-red-300">(required)</span>
                </label>
                <input
                    type="text"
                    name="role"
                    className="border text-gray-900 text-xl px-3 rounded-sm block w-full h-14 dark:bg-gray-500 dark:text-white focus:outline-none"
                    placeholder="Enter Role"
                    required
                />

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                        <div className="w-full mt-2 border dark:border-gray-500 rounded-md shadow-md">
                            <div className="top_header_bg dark:bg-gray-500 py-3 px-2 w-full flex justify-between items-center">
                                <h2 className="text-black -mb-1 text-xl font-semibold">User</h2>
                            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                            </div>
                            <div className="p-3 grid grid-cols-2 gap-10">
                                {categories.map((category) => {
                                    return (
                                        <div key={category.key} className="flex align-items-center">
                                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                                            <label htmlFor={category.key} className="ml-2">
                                                {category.name}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                </section>
            </form>
        </div>
    );
};

export default NewRoleSample;
