import HomeImage from "../assets/Intro.jpg";
import Tick from "../assets/tick.png";
import ArrowDown from "../assets/arrow_down.png";
function who_are_we() {
  return (
    <div className="flex justify-evenly mt-32 mb-48">
      <div className="w-5/12 h-min rounded-xl overflow-hidden">
        <img className="object-cover" src={HomeImage} alt="home image" />
      </div>
      <div className="w-5/12">
        <div className="font-bold text-2xl">
          <h1>Who We Are and What You</h1>
          <h1>Get From Us</h1>
        </div>
        <p className="font-semibold text-sm text-gray-500 my-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur dignissimos earum harum, iure maxime natus obcaecati quae
          quos rem sequi sint vero. Aperiam dolore laboriosam molestias officiis
          tenetur totam!
        </p>
        <div className="flex flex-col">
          <a href="#" className="flex items-center">
            <div className="bg-black h-min rounded-3xl">
              <img width={40} src={Tick} alt="tick" />
            </div>
            <div className="flex justify-between w-full items-center px-6 py-3 bg-white ml-10">
              <p className="font-semibold text-gray-800">
                Best price on the market
              </p>
              <img width={30} src={ArrowDown} alt="arrow down" />
            </div>
          </a>
          <a href="#" className="flex items-center my-3">
            <div className="bg-black h-min rounded-3xl">
              <img width={40} src={Tick} alt="tick" />
            </div>
            <div className="flex justify-between w-full items-center px-6 py-3 bg-white ml-10">
              <p className="font-semibold text-gray-800">
                Best price on the market
              </p>
              <img width={30} src={ArrowDown} alt="arrow down" />
            </div>
          </a>
          <a href="#" className="flex items-center">
            <div className="bg-black h-min rounded-3xl">
              <img width={40} src={Tick} alt="tick" />
            </div>
            <div className="flex justify-between w-full items-center px-6 py-3 bg-white ml-10">
              <p className="font-semibold text-gray-800">
                Best price on the market
              </p>
              <img width={30} src={ArrowDown} alt="arrow down" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default who_are_we;
