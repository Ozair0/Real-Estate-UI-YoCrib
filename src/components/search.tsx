import Arrow from "../assets/arrow.png";
import SearchIcon from "../assets/search.png";

function Search() {
  return (
    <div className="mt-40 mb-20 mx-auto w-min bg-white pl-10 rounded-xl shadow-2xl flex">
      <div className="flex flex-col items-start h-full border-black border-r-[1px] py-6">
        <div className="flex items-center justify-center mr-4">
          <p className="text-black font-medium">Location</p>
          <img
            className="w-3 h-4 ml-2 mt-1"
            src={Arrow}
            alt="arrow down image"
          />
        </div>
        <p className="text-gray-500 font-medium w-max mr-4">Wuse, Abuja</p>
      </div>

      <div className="flex flex-col items-start h-full border-black border-r-[1px] py-6 ml-10">
        <div className="flex items-center justify-center mr-4">
          <p className="text-black font-medium">Type</p>
          <img
            className="w-3 h-4 ml-2 mt-1"
            src={Arrow}
            alt="arrow down image"
          />
        </div>
        <p className="text-gray-500 font-medium w-max mr-4">Luxury 3000m</p>
      </div>

      <div className="flex flex-col items-start h-full py-6 ml-10">
        <div className="flex items-center justify-center mr-2">
          <p className="text-black font-medium">Price Range</p>
          <img
            className="w-3 h-4 ml-2 mt-1"
            src={Arrow}
            alt="arrow down image"
          />
        </div>
        <p className="text-gray-500 font-medium w-max mr-2">
          $55,000 - $150,000
        </p>
      </div>
      <a
        href="/"
        className="bg-[#241b1c] p-5 self-center rounded-xl flex items-center ml-4 mr-2"
      >
        <img
          className="max-w-max self-center"
          width={40}
          height={40}
          src={SearchIcon}
          alt="search icon"
        />
      </a>
    </div>
  );
}

export default Search;
