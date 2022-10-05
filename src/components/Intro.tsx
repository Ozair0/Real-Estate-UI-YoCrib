import Nav from "./nav";
import Search from "./search";
import BgImage from "../assets/Background_Image.png";

function Intro() {
  return (
    <div>
      <div className="w-full h-[650px] absolute -z-10 brightness-50">
        <img
          className="w-full h-[650px] object-cover"
          src={BgImage}
          alt="bg-image"
        />
      </div>
      <Nav />
      <div className="text-white mt-20 ml-20">
        <h1 className="text-5xl font-bold">Find Your Perfect</h1>
        <h1 className="text-5xl font-bold mt-5">Home</h1>
        <div className="mt-14">
          <p>We make sure you get the best deal possible and at a very fair</p>
          <p>price. our other benefits include</p>
        </div>
        <div className="mt-10">
          <a
            className="border-2 border-solid rounded-md px-9 py-4 bg-glass font-semibold"
            href="/"
          >
            Get started
          </a>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Intro;
