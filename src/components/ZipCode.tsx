import { useState } from "react";
import zagoalLogo from "../assets/Circle Logo.png";

export const ZipCode = () => {
  const [zipcode, setZipCode] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${zipcode} submitted successfully!`);
  };
  return (
    <section className="container flex flex-col items-center justify-center h-screen gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col">
        <img
          className="rounded-full w-24 h-24 mb-4"
          src={zagoalLogo}
          alt="zagoal-logo"
        />
        <h1 className="text-3xl font-semibold mb-4">
          Great! You're on the waitlist.
        </h1>
        <p className="text-center text-black text-lg font-normal">
          We will soon be starting to onboarding users in closed alpha! <br />
          Tell us your zipcode to send you invite when we come into your area.
        </p>
      </div>
      <form action="" onSubmit={handleSubmit} className="w-full">
        <div className="sm:flex items-center justify-between md:w-[75%] lg:w-1/2 mx-auto p-4 gap-1">
          <div className="flex-1">
            <input
              onChange={handleChange}
              type="text"
              id="zipcode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D3D3D3] focus:border-[#D3D3D3] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Zipcode"
              required
              name="zipcode"
            />
          </div>
          <div className="w-[30%] max-sm:w-full max-sm:mt-4">
            <button
              type="submit"
              className="w-full bg-[#F4F4F4] hover:bg-[#D3D3D3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-[#D3D3D3]"
            >
              Get early access
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
