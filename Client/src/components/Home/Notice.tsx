const Notice = () => {
  // TODO: Have to the notice from database
  const topNotice: string[] = [
    "Admission will start from 02 Jan",
    "Annual College Carnival: Fun, Food, and Festivities Await!",
    "Career Fair 2023: Explore Your Future Opportunities",
    "Midterm Examinations Schedule Released",
    "Library Closure Notice for Inventory and Maintenance",
  ];
  return (
    <div className="w-full md:w-[7/12] lg:w-9/12 p-4 md:p-6 lg:py-16 lg:px-24 rounded-md bg-[#e8eaf6]">
      <h1 className="font-semibold text-2xl">Notice Board</h1>
      {/* TODO: Have to show notice from database */}
      <ul className="list-disc list-inside">
        {topNotice.map((notice, index) => {
          return (
            <li key={index} className="text-lg md:text-xl my-1">
              {notice}
            </li>
          );
        })}
      </ul>
      <button className="bg-[#2196f3] mt-4 hover:bg-[#1e88e5] duration-150 py-1.5 px-2 block text-sm md:text-base ml-auto rounded-md text-white">
        View All
      </button>
    </div>
  );
};

export default Notice;
