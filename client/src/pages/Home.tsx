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
            className="flex justify-center text-center pt-6 "
            variant="underlined"
          >
            <Tab className="text-lg" key="cars" title="Cars">
              <div className="flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40">
                <VehicleCard
                  image={"yaris.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Yaris"}
                  description={"Compact and agile"}
                  price={"$20,300"}
                  horsepower={"92hp"}
                  link={"/vehicles/yaris"}
                />
                <VehicleCard
                  image={"aygo.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Aygo X"}
                  description={"Elevated, for you"}
                  price={"$18,240"}
                  horsepower={"71hp"}
                  link={"/vehicles/aygo"}
                />
                <VehicleCard
                  image={"camry.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Camry"}
                  description={"Discover more drive for every day"}
                  price={"$26,420"}
                  horsepower={"203hp"}
                  link={"/vehicles/camry"}
                />
                <VehicleCard
                  image={"corolla.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Corolla"}
                  description={"Refine your routine"}
                  price={"$21,700"}
                  horsepower={"169hp"}
                  link={"/vehicles/corolla"}
                />
                <VehicleCard
                  image={"mirai.jpg"}
                  fuel={"Hydrogen"}
                  name={"Mirai"}
                  description={"Innovation is power"}
                  price={"$49,500"}
                  horsepower={"182hp"}
                  link={"/vehicles/mirai"}
                />
                <VehicleCard
                  image={"crown.jpg"}
                  fuel={"Hybrid"}
                  name={"Crown"}
                  description={"An image of innovation"}
                  price={"$40,350"}
                  horsepower={"236hp"}
                  link={"/vehicles/crown"}
                />
              </div>
            </Tab>

            <Tab className="text-lg" key="trucks" title="Trucks">
              <div className="flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40">
                <VehicleCard
                  image={"tacoma.jpg"}
                  fuel={"Gas"}
                  name={"Tacoma"}
                  description={"The adventure never ends"}
                  price={"$28,600"}
                  horsepower={"278hp"}
                  link={"/vehicles/tacoma"}
                />
                <VehicleCard
                  image={"tundra.jpg"}
                  fuel={"Gas"}
                  name={"Tundra"}
                  description={"Designed to be tough"}
                  price={"$38,965"}
                  horsepower={"358hp"}
                  link={"/vehicles/tundra"}
                />
                <VehicleCard
                  image={"hilux.jpg"}
                  fuel={"Gas"}
                  name={"Hilux"}
                  description={"The unbreakable machine"}
                  price={"$39,900"}
                  horsepower={"201hp"}
                  link={"/vehicles/hilux"}
                />
              </div>
            </Tab>
            <Tab className="text-lg" key="suvs" title="SUVs" />
            <Tab className="text-lg" key="electric" title="100% Electric" />
            <Tab className="text-lg" key="gr" title="GR">
              <div className="flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40">
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
                  image={"grcorolla.jpg"}
                  fuel={"Gas"}
                  name={"GR Corolla"}
                  description={"Ready to rally"}
                  price={"$35,900"}
                  horsepower={"300hp"}
                  link={"/vehicles/gr-corolla"}
                />
                <VehicleCard
                  image={"grsupra.jpg"}
                  fuel={"Gas"}
                  name={"GR Supra"}
                  description={"Shift it up a notch"}
                  price={"$44,640"}
                  horsepower={"255hp"}
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
