import ArrowBlack from "../assets/arrow_black.png";
import ArrowWhite from "../assets/arrow_white.png";
import DollarSign from "../assets/dollar.png";
import LocationSign from "../assets/location.png";
import FavoriteSign from "../assets/heart.png";
import Apartment1 from "../assets/1.jpg";
import Apartment2 from "../assets/3.jpg";
import Apartment3 from "../assets/2.jpg";
function luxury_apartments() {
  return (
    <div className="flex flex-col mx-20 mb-24">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-black text-4xl">Luxury Apartments</h1>
          <div className="font-semibold text-gray-400 text-md mt-10">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>adipisicing elit. Aliquam eu turpis</p>
          </div>
        </div>
        <div className="flex">
          <a
            href=""
            className="w-9 bg-white shadow-md h-9 rounded-md flex justify-center items-center transform transition duration-500 hover:scale-110"
          >
            <img className="w-8/12" src={ArrowBlack} alt="left arrow" />
          </a>
          <a
            href=""
            className="w-9 bg-black shadow-md h-9 rounded-md ml-6 flex justify-center items-center transform transition duration-500 hover:scale-110"
          >
            <img
              className="rotate-180 w-8/12"
              src={ArrowWhite}
              alt="right arrow"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between mt-16">
        <div className="bg-white rounded-2xl p-3 flex flex-col w-[400px] transform transition duration-500 hover:scale-110">
          <div className="w-full h-[350px] overflow-hidden rounded-2xl">
            <img
              className="object-cover h-full"
              src={Apartment1}
              alt="apartment"
            />
          </div>
          <div className="flex flex-col mt-6 ml-3">
            <div className="flex items-center">
              <div className="w-1/12">
                <img src={DollarSign} alt="dollar sign" />
              </div>
              <p className="font-semibold text-xl">97,026</p>
            </div>
            <p className="font-semibold text-md text-gray-800 mt-2">
              Mancini Homes
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[20px] h-min">
                  <img src={LocationSign} alt="location sign" />
                </div>
                <p className="text-[#bcc0c1] font-semibold text-md ml-2 mb-[1.7px]">
                  Wuse Zone 5
                </p>
              </div>
              <a
                href=""
                className="bg-orange-500 rounded-3xl w-10 h-10 flex items-center justify-center"
              >
                <img src={FavoriteSign} className="w-6" alt="favorite sign" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3 flex flex-col w-[400px] transform transition duration-500 hover:scale-110">
          <div className="w-full h-[350px] overflow-hidden rounded-2xl">
            <img
              className="object-cover h-full"
              src={Apartment2}
              alt="apartment"
            />
          </div>
          <div className="flex flex-col mt-6 ml-3">
            <div className="flex items-center">
              <div className="w-1/12">
                <img src={DollarSign} alt="dollar sign" />
              </div>
              <p className="font-semibold text-xl">109,061</p>
            </div>
            <p className="font-semibold text-md text-gray-800 mt-2">
              Classy ghetto
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[20px] h-min">
                  <img src={LocationSign} alt="location sign" />
                </div>
                <p className="text-[#bcc0c1] font-semibold text-md ml-2 mb-[1.7px]">
                  Wuse Zone 5
                </p>
              </div>
              <a
                href=""
                className="bg-orange-500 rounded-3xl w-10 h-10 flex items-center justify-center"
              >
                <img src={FavoriteSign} className="w-6" alt="favorite sign" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3 flex flex-col w-[400px] transform transition duration-500 hover:scale-110">
          <div className="w-full h-[350px] overflow-hidden rounded-2xl">
            <img
              className="object-cover h-full"
              src={Apartment3}
              alt="apartment"
            />
          </div>
          <div className="flex flex-col mt-6 ml-3">
            <div className="flex items-center">
              <div className="w-1/12">
                <img src={DollarSign} alt="dollar sign" />
              </div>
              <p className="font-semibold text-xl">120,085</p>
            </div>
            <p className="font-semibold text-md text-gray-800 mt-2">
              King Vhince ville
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[20px] h-min">
                  <img src={LocationSign} alt="location sign" />
                </div>
                <p className="text-[#bcc0c1] font-semibold text-md ml-2 mb-[1.7px]">
                  Wuse Zone 5
                </p>
              </div>
              <a
                href=""
                className="bg-orange-500 rounded-3xl w-10 h-10 flex items-center justify-center"
              >
                <img src={FavoriteSign} className="w-6" alt="favorite sign" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default luxury_apartments;
