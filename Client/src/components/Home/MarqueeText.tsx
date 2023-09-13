import Marquee from "react-fast-marquee";
const MarqueeText = () => {
  return (
    <div className="flex">
      {/* TODO: have make the marquee content dynamic */}
      <span className="bg-[#e8eaf6] w-2 md:w-4 lg:w-10 "></span>
      <Marquee pauseOnHover={true} className="bg-[#e8eaf6] md:text-2xl py-0.5">
        <h1 className="border-x-2 border-white px-12">
          School Closed for Winter Break from 6 Jun to 9 Sep.
        </h1>
        <h1 className="border-x-2 border-white px-12">
          Upcoming Parent-Teacher Conferences - Save the Date!
        </h1>
        <h1 className="border-x-2 border-white px-12">
          Join Our School's Reading Challenge - Get Ready to Read!
        </h1>
        <h1 className="border-x-2 border-white px-12">
          Don't Miss the School Talent Show on 10 Sep.
        </h1>
      </Marquee>
      <span className="bg-[#e8eaf6] w-2 md:w-4 lg:w-10"></span>
    </div>
  );
};

export default MarqueeText;
