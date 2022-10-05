function Nav() {
  return (
    <div className="w-full pt-10 px-32">
      <div className="w-full flex justify-between items-center">
        <a className="flex font-bold text-3xl" href="/">
          <p className="text-[#c6b489]">Yo</p>
          <p className="text-white">Crib</p>
        </a>
        <div className="text-white text-xl font-semibold">
          <a href="/">Home</a>
          <a className="ml-10" href="/">
            Features
          </a>
          <a className="ml-10" href="/">
            Service
          </a>
          <a className="ml-10" href="/">
            About Us
          </a>
          <a className="ml-10 bg-[#c56e06] px-4 py-2 rounded-md" href="/">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
