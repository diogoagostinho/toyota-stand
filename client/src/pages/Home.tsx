import { useEffect } from "react";
import HomeHero from "../components/HomeHero";
import { Tabs, Tab } from "@nextui-org/react";
import VehicleCard from "../components/VehicleCard";

function Home() {
  useEffect(() => {
    document.title = "Toyota";
  });
  return (
    <>
      <HomeHero />
      <div className="w-full pt-14">
        <h1 className="md:text-5xl text-3xl font-semibold text-center">
          Explore All Vehicles
        </h1>
        <div>
          <Tabs
            className="flex justify-center text-center pt-6"
            variant="underlined"
          >
            <Tab className="text-lg" key="cars" title="Cars"></Tab>
            <Tab className="text-lg" key="trucks" title="Trucks" />
            <Tab className="text-lg" key="suvs" title="SUVs" />
            <Tab
              className="text-lg"
              key="alternatives"
              title="Electric & Hybrid"
            />
            <Tab className="text-lg" key="gr" title="GR">
              <div className="flex flex-row flex-wrap gap-4 justify-center">
                <VehicleCard
                  image={"gr86.jpg"}
                  fuel={"Gas"}
                  name={"GR86"}
                  description={"Thrill-seeker’s delight"}
                  price={"$29,300"}
                  horsepower={"228hp"}
                  link={"/vehicles/gr86"}
                />
                <VehicleCard
                  image={"gryaris.jpg"}
                  fuel={"Gas"}
                  name={"GR YARIS"}
                  description={"GR's hot hatch"}
                  price={"$40,000"}
                  horsepower={"118hp"}
                  link={"/vehicles/gr-yaris"}
                />
                <VehicleCard
                  image={"gryaris.jpg"}
                  fuel={"Gas"}
                  name={"GR Corolla"}
                  description={
                    "Built for the track, ready for every day driving"
                  }
                  price={"$40,000"}
                  horsepower={"118hp"}
                  link={"/vehicles/gr-corolla"}
                />
                <VehicleCard
                  image={"gryaris.jpg"}
                  fuel={"Gas"}
                  name={"GR Supra"}
                  description={"A legend reborn"}
                  price={"$40,000"}
                  horsepower={"118hp"}
                  link={"/vehicles/gr-supra"}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="pt-10 md:px-20 px-10"></div>
    </>
  );
}

export default Home;
