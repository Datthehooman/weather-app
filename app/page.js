import Image from "next/image";
import cloudy from "../public/cloudy.png";
import fetchWeatherData from "./fetch.js";

const weatherData = await fetchWeatherData("london", 1);
console.log(weatherData);

export default function Home() {
  return (
    <main className="text-center items-center">
      <div className="flex flex-row">
        <div className="basis-1/6">
          <button className=" bg-[#5a8ff4] w-6 rounded-full">+</button>
        </div>
        <div className="basis-4/6">
          <h1 className="text-xl">hell0</h1>
          <h6>hello0</h6>
        </div>
        <div className="basis-1/6">
          <button className="bg-[#5a8ff4] w-6 rounded-full">:</button>
        </div>
      </div>
      <div className="place-content-center">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Image
          src={cloudy}
          width={300}
          height={300}
          alt="weather image"
          className=""
        ></Image>
      </div>
      <div className="">hello</div>
      <div className="">hello</div>
    </main>
  );
}
