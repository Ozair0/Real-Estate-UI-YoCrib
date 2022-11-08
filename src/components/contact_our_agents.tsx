import Avatar1 from "../assets/Avatar_3.jpg";
import Avatar2 from "../assets/Avatar_4.jpg";
import Avatar3 from "../assets/Avatar_5.jpg";
function contact_our_agents() {
  return (
    <div className="py-24 w-full bg-[#dfd1c4]">
      <h1 className="mx-auto w-max text-[#2f2822] font-bold text-4xl">
        Contact our agents
      </h1>
      <div className="mt-24 flex justify-evenly">
        <div className="w-[400px] bg-[#2f2822] text-white p-10 justify-center flex flex-col items-center rounded-3xl border-[#b7a187] border-[6px] transform transition duration-500 hover:scale-110">
          <div className="w-[170px] h-[170px] rounded-[170px] overflow-hidden">
            <img src={Avatar1} alt="person image" width={170} height={170} />
          </div>
          <h1 className="font-bold text-2xl mt-4">Diana Rose</h1>
          <p className="font-semibold text-sm text-[#a59e98]">
            7+ years experience
          </p>
          <h1 className="font-bold text-3xl text-[#c7ae82] mt-12">
            About Diana
          </h1>
          <div className="mt-6">
            <p className="text-center text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus assumenda facere, fugiat id porro possimus reprehenderit
              sint ut voluptates. Aperiam aspernatur ipsam itaque iusto nobis
              quisquam rem repellendus rerum
              <span className="text-white">... Read more</span>
            </p>
          </div>
        </div>
        <div className="w-[400px] bg-[#2f2822] text-white p-10 justify-center flex flex-col items-center rounded-3xl border-[#b7a187] border-[6px] transform transition duration-500 hover:scale-110">
          <div className="w-[170px] h-[170px] rounded-[170px] overflow-hidden">
            <img src={Avatar2} alt="person image" width={170} height={170} />
          </div>
          <h1 className="font-bold text-2xl mt-4">Henry Ford</h1>
          <p className="font-semibold text-sm text-[#a59e98]">
            9+ years experience
          </p>
          <h1 className="font-bold text-3xl text-[#c7ae82] mt-12">
            About Henry
          </h1>
          <div className="mt-6">
            <p className="text-center text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus assumenda facere, fugiat id porro possimus reprehenderit
              sint ut voluptates. Aperiam aspernatur ipsam itaque iusto nobis
              quisquam rem repellendus rerum
              <span className="text-white">... Read more</span>
            </p>
          </div>
        </div>
        <div className="w-[400px] bg-[#2f2822] text-white p-10 justify-center flex flex-col items-center rounded-3xl border-[#b7a187] border-[6px] transform transition duration-500 hover:scale-110">
          <div className="w-[170px] h-[170px] rounded-[170px] overflow-hidden">
            <img src={Avatar3} alt="person image" width={170} height={170} />
          </div>
          <h1 className="font-bold text-2xl mt-4">Becky Lee</h1>
          <p className="font-semibold text-sm text-[#a59e98]">
            6+ years experience
          </p>
          <h1 className="font-bold text-3xl text-[#c7ae82] mt-12">
            About Becky
          </h1>
          <div className="mt-6">
            <p className="text-center text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus assumenda facere, fugiat id porro possimus reprehenderit
              sint ut voluptates. Aperiam aspernatur ipsam itaque iusto nobis
              quisquam rem repellendus rerum
              <span className="text-white">... Read more</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex mt-28 w-max">
        <div className="w-4 h-4 bg-[#955611] rounded-[100%]"></div>
        <div className="w-4 h-4 border-2 border-[#2d2822] rounded-[100%] ml-2"></div>
        <div className="w-4 h-4 border-2 border-[#2d2822] rounded-[100%] ml-2"></div>
        <div className="w-4 h-4 border-2 border-[#2d2822] rounded-[100%] ml-2"></div>
      </div>
    </div>
  );
}
export default contact_our_agents;
