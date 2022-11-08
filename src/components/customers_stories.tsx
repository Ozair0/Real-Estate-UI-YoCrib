import Apartment from "../assets/1.jpg";
import Avatar1 from "../assets/Avatar_1.jpg";
import Avatar2 from "../assets/Avatar_2.jpg";
import FullStar from "../assets/full_star.png";
import EmptyStar from "../assets/empty_star.png";
import RightQuote from "../assets/right_quote.png";
function customers_stories() {
  return (
    <div className="w-full h-[800px] flex flex-col">
      <div className="w-full h-[800px] brightness-50 absolute -z-10">
        <img
          className="object-cover h-full"
          src={Apartment}
          alt="apartment image"
        />
      </div>
      <h1 className="mx-auto w-max font-semibold text-white text-4xl mt-20">
        Customers stories
      </h1>
      <div className="flex justify-between mt-40 mx-52">
        <div className="flex flex-col w-[500px] bg-[#31271e] rounded-xl p-8 transform transition duration-500 hover:scale-110">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-20 h-20 rounded-[100%] overflow-hidden flex">
                <img className="object-cover" src={Avatar1} alt="avatar" />
              </div>
              <div className="flex flex-col ml-5">
                <h1 className="text-white font-bold">Collins lamach</h1>
                <p className="text-[#dfd1c4]">Photographer</p>
              </div>
            </div>
            <div className="flex">
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={EmptyStar} alt="full star" />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[#dfd1c4] w-full text-md mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur aut, autem deleniti, et, eveniet molestiae odit quia
              quos repellat rerum sit tempora! Ad adipisci aut iusto
              necessitatibus odio, quod sequi.
            </p>
            <div className="w-8 h-8">
              <img src={RightQuote} alt="right quote" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[500px] bg-[#31271e] rounded-xl p-8 transform transition duration-500 hover:scale-110">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-20 h-20 rounded-[100%] overflow-hidden flex">
                <img className="object-cover" src={Avatar2} alt="avatar" />
              </div>
              <div className="flex flex-col ml-5">
                <h1 className="text-white font-bold">Sydney Jerry</h1>
                <p className="text-[#dfd1c4]">Lawyer</p>
              </div>
            </div>
            <div className="flex">
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
              <img className="w-5 h-5" src={FullStar} alt="full star" />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[#dfd1c4] w-full text-md mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur aut, autem deleniti, et, eveniet molestiae odit quia
              quos repellat rerum sit tempora! Ad adipisci aut iusto
              necessitatibus odio, quod sequi.
            </p>
            <div className="w-8 h-8">
              <img src={RightQuote} alt="right quote" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex mt-28">
        <div className="w-5 h-5 bg-[#dfd1c4] rounded-[100%]"></div>
        <div className="w-5 h-5 border-2 border-[#dfd1c4] rounded-[100%] ml-2"></div>
        <div className="w-5 h-5 border-2 border-[#dfd1c4] rounded-[100%] ml-2"></div>
        <div className="w-5 h-5 border-2 border-[#dfd1c4] rounded-[100%] ml-2"></div>
      </div>
    </div>
  );
}

export default customers_stories;
