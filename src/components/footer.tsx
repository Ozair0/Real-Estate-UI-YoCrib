function footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex my-24">
        <div className="flex flex-col items-start basis-1/2 ml-20">
          <h1 className="text-black text-2xl font-bold">YoCrib</h1>
          <p className="text-sm text-gray-600 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            At cumque cupiditate ducimus illo iure labore libero quo
            repellendus.
          </p>
        </div>
        <div className="flex flex-col items-start basis-1/4">
          <h1 className="text-black text-2xl font-bold">About</h1>
          <p className="text-sm text-gray-600 mt-6">About Us</p>
          <p className="text-sm text-gray-600 mt-6">Features</p>
          <p className="text-sm text-gray-600 mt-6">News & Blog</p>
        </div>
        <div className="flex flex-col items-start basis-1/4">
          <h1 className="text-black text-2xl font-bold">Company</h1>
          <p className="text-sm text-gray-600 mt-6">How we work</p>
          <p className="text-sm text-gray-600 mt-6">Capital</p>
          <p className="text-sm text-gray-600 mt-6">Security</p>
        </div>
        <div className="flex flex-col items-start basis-1/4">
          <h1 className="text-black text-2xl font-bold">Support</h1>
          <p className="text-sm text-gray-600 mt-6">FAQs</p>
          <p className="text-sm text-gray-600 mt-6">Support</p>
          <p className="text-sm text-gray-600 mt-6">Contact Us</p>
        </div>
      </div>
      <div className="w-full bg-black py-6">
        <p className="text-white mx-auto w-max text-sm font-semibold">
          2022 YoCrib, All rights reserved
        </p>
      </div>
    </div>
  );
}

export default footer;
