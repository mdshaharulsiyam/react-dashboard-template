/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import './ProfileCss/Profile.css'
import { IoIosImages } from "react-icons/io";

const Profile = () => {
  const [image,setImage ] = useState("");

  const convertToBase64 = (e) =>{
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.onerror = error => {
      console.log("Error : ",error);
    };

  }

  // dark: bg - [#2F3249]
  return (
    <div className="mb-16">
      <h1 className="my-4 w-full mx-auto  text-3xl dark:text-white text-black ">Personal Profile</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* user details part */}
        <div className="card bg-white dark:bg-[#2F3249] w-full md:w-[40%] lg:w-[30%] shadow-xl rounded-lg border dark:border-none ">
          <h1 className="text-2xl text-black bg-[#f7f7fa] dark:bg-gray-500 dark:border-none pl-5 mb-6 border-b py-2 dark:rounded-sm dark:text-white">
            User Details
          </h1>
          <figure>
            <img
              className="w-[110px] h-[110px] rounded-lg"
              src="https://redinvoice.com/backend/app-assets/images/avatars/11.png"
              alt="girls-image"
            />
          </figure>
          {/* superAdmin title */}
          <div className="text-center ">
            <h1 className="mt-2 text-2xl dark:text-white text-black">SuperAdmin</h1>
          </div>
          {/* superAdmin button */}
          <button className="w-[24%] md:w-[32%] xl:w-[33%]  border mx-auto rounded-lg text-white text-xs xl:text-lg bg-[#6C757D] font-bol  dark:border-none dark:text-white">SuperAdmin</button>
          <div className=" p-0 pl-5 mb-5">
            {/* superAdmin name */}
            <h6 className="dark:text-white"><span className=" font-bold text-lg md:text-base lg:text-base xl:text-lg dark:text-white text-black">Name :</span> SuperAdmin</h6>
            {/* superAdmin email */}
            <h6 className="dark:text-white"><span className="font-bold text-lg md:text-base lg:text-base xl:text-lg text-black dark:text-white"> Email :</span><span className="lg:text-sm xl:text-base">admindhaka@gmail.com</span></h6>
            {/* superAdmin phone number*/}
            <h6 className="dark:text-white"><span className="font-bold text-lg md:text-base lg:text-base xl:text-lg text-black dark:text-white">Mobile: </span><span className="lg:text-sm xl:text-base">01799600000</span></h6>
          </div>
          {/* profile modal component */}
          <ProfileModal ></ProfileModal>
        </div>
        {/* Update Profile Basic part(2nd part) */}
        <div className="mt-5 dark:text-white md:mt-0 md:w-[60%] lg:w-[70%]">
          {/* <div className="card bg-base-100 shadow-xl border rounded-lg"></div> */}
          <div className="card bg-white dark:bg-[#2F3249] shadow-xl border dark:border-none rounded-lg">
            <h1 className="text-black text-2xl bg-[#f7f7fa] pl-5 mb-2 border-b py-2  dark:bg-gray-500 dark:border-none dark:rounded-sm dark:text-white">
              Update Profile Basic
            </h1>
            <div className="w-full">
              <form className="">
                <div className="flex flex-col md:flex-row justify-between lg:gap-10 w-full ">
                  <div className="w-full md:w-[65%] lg:w-full pr-4 md:pr-0">
                    {/* name */}
                    <div className="form-control pl-4 mt-4 mb-1">
                      <label className="">
                        <span className="label-text text-base font-medium dark:text-white text-black">
                          Name<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="name"
                        placeholder="Name"
                        className="input input-bordered lg:w-full py-0 bg-[#f7f7fa] dark:bg-base-100 "
                        required
                      />
                    </div>
                    {/* Mobile */}
                    <div className="form-control pl-4 mb-1">
                      <label className="">
                        <span className="label-text text-base font-medium dark:text-white text-black">
                          Mobile<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Number"
                        className="input input-bordered  lg:w-full bg-[#f7f7fa] dark:bg-base-100"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-control pl-4">
                      <label className="">
                        <span className="label-text text-base font-medium dark:text-white text-black">
                          Email<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered  lg:w-full bg-[#f7f7fa] dark:bg-base-100"
                        required
                      />
                      {/* defaultValue={Email} */}
                    </div>
                  </div>
                  {/* Profile Photo */}
                  <div className="ml-4 mr-4 lg:mr-4 md:w-[35%] ">
                    <h1 className="md:mt-5 text-base font-medium text-black dark:text-white ">
                      Profile Photo
                    </h1>
                    <div className="w-[100%] h-[240px] md:h-[180px] dark:border-gray-500 rounded-xl border-4 border-dashed ">
                      {image == "" || image == null ? 
                        <label id="uploadImage" htmlFor="uploadBtn" className="h-[100%] w-[100%]"><IoIosImages className="h-[100%] w-[100%]"/></label>
                       : <img src={image} className="w-full md:w-[100%] lg:w-[100%] h-[100%] p-2" alt="" />}
                      <span className="text-lg md:text-xs xl:text-base pl-2"></span> 
                      <input type="file" id="uploadBtn" onChange={convertToBase64} />
                    </div>
                  </div>
                </div>
                {/* role */}
                <div className="form-control pl-4 pr-4">
                  <label className="label">
                    <span className="label-text text-base font-medium dark:text-white text-black">
                      Role<span className="pl-1 text-red-400">(required)</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Role"
                    className="input input-bordered bg-[#f7f7fa] dark:dark:bg-base-100"
                    required
                  />
                </div>
                {/* button */}
                <div className="py-2 w-full bg-[#f7f7fa] dark:bg-gray-500 text-center dark:border-none  border mt-2 dark:rounded-sm">
                  <button className="w-[90%] md:w-[96%] h-[40px] border dark:border-none bg-[#28C76F]  text-white rounded-lg">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
