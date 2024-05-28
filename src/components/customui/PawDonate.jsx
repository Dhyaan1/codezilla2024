import { Button } from "../ui/button";
import { useState } from "react";

export default function PawDonate() {
  const [value, setValue] = useState(500);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5] dark:bg-gray-900"
        id="donate"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#333] dark:text-white">
                Donate to Our Cause
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your donation can make a real difference in the lives of animals
                in need. Help us provide food, shelter, medical care, and
                rehabilitation services to rescue animals and find them loving
                homes. <span className=" text-2xl">&#8377;</span>99 can feed 5
                dogs for a day
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="max-w-lg flex-1 p-4"
                  placeholder="Enter donation amount"
                  type="number"
                  value={value}
                  onChange={handleChange}
                />
                <Button className="bg-gray-900 p-4 mt-2 hover:bg-gray-900 text-white">
                  <a href="https://payment.page/demo/">Donate</a>
                </Button>
              </form>
              <br />
              <h1>
                {((value * 5) / 99).toFixed(0)} animals will saved by your
                kindness
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
