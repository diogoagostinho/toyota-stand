import { useEffect } from "react";
import HomeHero from "../components/HomeHero";
import {
  Tabs,
  Tab,
  Button,
  Link,
  Card,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
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
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
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
                  image={"crown.jpg"}
                  fuel={"Hybrid"}
                  name={"Crown"}
                  description={"An image of innovation"}
                  price={"$40,350"}
                  horsepower={"236hp"}
                  link={"/vehicles/crown"}
                />
                <VehicleCard
                  image={"prius.jpg"}
                  fuel={"Hybrid"}
                  name={"Prius"}
                  description={"The hybrid reborn"}
                  price={"$27,450"}
                  horsepower={"194hp"}
                  link={"/vehicles/prius"}
                />
              </div>
            </Tab>

            <Tab className="text-lg" key="trucks" title="Trucks">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
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
            <Tab className="text-lg" key="suvs" title="SUVs">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
                <VehicleCard
                  image={"4runner.jpg"}
                  fuel={"Gas"}
                  name={"4Runner"}
                  description={"For adventurers. For legends. 4Runner."}
                  price={"$40,155"}
                  horsepower={"270hp"}
                  link={"/vehicles/4runner"}
                />
                <VehicleCard
                  image={"corollacross.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Corolla Cross"}
                  description={"Ride and shine"}
                  price={"$23,610"}
                  horsepower={"169hp"}
                  link={"/vehicles/corolla-cross"}
                />
                <VehicleCard
                  image={"highlander.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Highlander"}
                  description={"Drive with purpose, arrive in style"}
                  price={"$36,620"}
                  horsepower={"265hp"}
                  link={"/vehicles/highlander"}
                />
                <VehicleCard
                  image={"grandhighlander.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"Grand Highlander"}
                  description={"More space means more memories"}
                  price={"$43,320"}
                  horsepower={"265hp"}
                  link={"/vehicles/grand-highlander"}
                />
                <VehicleCard
                  image={"landcruiser.jpg"}
                  fuel={"Hybrid"}
                  name={"Land Cruiser"}
                  description={"Create a lasting legacy"}
                  price={"$55,950"}
                  horsepower={"326hp"}
                  link={"/vehicles/land-cruiser"}
                />
                <VehicleCard
                  image={"rav4.jpg"}
                  fuel={"Gas | Hybrid"}
                  name={"RAV4"}
                  description={"Take a break from routine"}
                  price={"$28,675"}
                  horsepower={"203hp"}
                  link={"/vehicles/rav4"}
                />
                <VehicleCard
                  image={"sequoia.jpg"}
                  fuel={"Hybrid"}
                  name={"Sequoia"}
                  description={"A powerful presence"}
                  price={"$59,865"}
                  horsepower={"437hp"}
                  link={"/vehicles/sequoia"}
                />
                <VehicleCard
                  image={"venza.jpg"}
                  fuel={"Hybrid"}
                  name={"Venza"}
                  description={"Enjoy the ride of your life"}
                  price={"$34,620"}
                  horsepower={"219hp"}
                  link={"/vehicles/venza"}
                />
                <VehicleCard
                  image={"chr.jpg"}
                  fuel={"Hybrid"}
                  name={"C-HR"}
                  description={"Toyota's rule breaker, impossible to ignore"}
                  price={"$36,900"}
                  horsepower={"194hp"}
                  link={"/vehicles/c-hr"}
                />
              </div>
            </Tab>
            <Tab className="text-lg" key="alternative" title="Alternative Fuel">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
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
                  image={"bz4x.jpg"}
                  fuel={"Electric"}
                  name={"bZ4X"}
                  description={"100% electric, 100% innovative"}
                  price={"$42,000"}
                  horsepower={"201hp"}
                  link={"/vehicles/bz4x"}
                />
              </div>
            </Tab>
            <Tab className="text-lg" key="gr" title="GR">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
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
          <div className="flex justify-center pt-10 px-10 sm:px-10 xl:px-10 2xl:px-40 rounded-2xl">
            <div className="w-full bg-center bg-cover rounded-2xl bg-[url('/thumbs/suprabackground.jpg')]">
              <div className="flex items-center justify-center rounded-2xl w-full h-full bg-gray-900 bg-opacity-50 py-12">
                <div className="text-center">
                  <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="mt-8 mb-6 text-3xl lg:text-4xl font-bold text-gray-100">
                        Find the perfect Toyota for you
                      </h2>
                      <Link href="/vehicles">
                        <Button
                          size="lg"
                          radius="sm"
                          variant="flat"
                          className="bg-red-500 text-white"
                        >
                          See All Vehicles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 md:px-20 px-10">
        <h1 className="md:text-5xl text-3xl font-semibold text-center">
          Discover Toyota
        </h1>
        <div className="pt-6 flex justify-center flex-wrap gap-6 *:cursor-pointer">
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/racing/">
              <Card className="py-4 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">FEATURED</p>
                  <small className="text-default-500">Welcome race fans!</small>
                  <h4 className="font-bold text-large">Toyota Racing</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/toyotaracing.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/gr86/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">NEWS</p>
                  <small className="text-default-500">86 the competition</small>
                  <h4 className="font-bold text-large">
                    New GR86 TRUENO Edition
                  </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/gr86trueno.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/rental">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">RENTALS</p>
                  <small className="text-default-500">
                    Rent a Toyota today
                  </small>
                  <h4 className="font-bold text-large">Toyota Rentals</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/rentals.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://careers.toyota.com/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">CAREERS</p>
                  <small className="text-default-500">
                    Get a job at Toyota!
                  </small>
                  <h4 className="font-bold text-large">Toyota Careers</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/careers.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/bz4x/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">NEWS</p>
                  <small className="text-default-500">
                    Brand new 2024 bZ4X
                  </small>
                  <h4 className="font-bold text-large">2024 bZ4X</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/newbz4x.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyotacertified.com/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">USED VEHICLES</p>
                  <small className="text-default-500">
                    Toyota's certified used cars
                  </small>
                  <h4 className="font-bold text-large">Toyota Certified</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/certified.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
