import zagoalLogo from "../assets/Circle Logo.png";

const PointsList = () => {
  return (
    <section className="container flex flex-col items-center justify-center h-screen gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col gap-4">
        <img
          className="rounded-full w-24 h-24 mb-4"
          src={zagoalLogo}
          alt="zagoal-logo"
        />
        <h1 className="text-3xl font-semibold mb-4">Fantastic! You're set.</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="border border-black p-4 text-center bg-[#F4F4F4]">
            <p>People Ahead of You</p>
            <strong>1,000</strong>
         </div>
         <div className="border border-black p-4 text-center bg-[#F4F4F4]">
            <p>Total Points</p>
            <strong>0</strong>
         </div>
         <div className="border border-black p-4 text-center bg-[#F4F4F4]">
            <p>Friends Referrals</p>
            <strong>0</strong>
         </div>
        </div>
      </div>
    </section>
  )
}

export default PointsList