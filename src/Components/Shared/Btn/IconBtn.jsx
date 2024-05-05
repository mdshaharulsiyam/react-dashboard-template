const IconBtn = ({ icon }) => {
  return (
    <button className="rounded-sm bg-blue-600 text-white px-4 py-[8px] text-sm font-medium hover:bg-blue-700 duration-500">
      <div className="text-2xl">{icon}</div>
    </button>
  );
};

export default IconBtn;
