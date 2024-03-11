import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import VehicleCard from "../components/VehicleCard";

function Vehicles() {
  useEffect(() => {
    document.title = "Toyota - Vehicles";
  });

  const [selectedCategory, setSelectedCategory] = useState(
    new Set(["All Vehicles"])
  );
  const selectedValue = useMemo(
    () => Array.from(selectedCategory).join(", ").replaceAll("_", " "),
    [selectedCategory]
  );
  const [selectedFilter, setSelectedFilter] = useState("a-z");

  const [allVehicles, setAllVehicles] = useState([]);
  const [cars, setCars] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [suvs, setSuvs] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [grs, setGrs] = useState([]);

  const handleSelectionFilter = (e) => {
    setSelectedFilter(e.currentKey.toString());
    console.log(selectedFilter);

    if (selectedFilter == "a-z") {
      console.log("A-Z");
    }
    if (selectedFilter == "highest") {
      console.log("Highest");
    }
    if (selectedFilter == "lowest") {
      console.log("Lowest");
    }
    if (selectedFilter == "horsepower") {
      console.log("Horsepower");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles/all")
      .then((vehicles) => setAllVehicles(vehicles.data))
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles/cars")
      .then((cars) => setCars(cars.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles/trucks")
      .then((trucks) => setTrucks(trucks.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles/suvs")
      .then((suvs) => setSuvs(suvs.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles/alternatives")
      .then((alternatives) => setAlternatives(alternatives.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicles/grs")
      .then((gr) => setGrs(gr.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center">Toyota Vehicles</h1>
      </div>
      <div className="px-10 sm:px-10 xl:px-10 2xl:px-40 justify-center pb-10">
        <div>
          <div className="flex justify-start gap-6 align-middle items-center pb-6">
            <Select
              onSelectionChange={handleSelectionFilter}
              size="sm"
              label="Order By:"
              className="max-w-xs"
              defaultSelectedKeys={["a-z"]}
              variant="faded"
            >
              <SelectItem key="a-z" value="a-z">
                A-Z
              </SelectItem>
              <SelectItem key="highest" value="highest">
                Highest Price
              </SelectItem>
              <SelectItem key="lowest" value="lowest">
                Lowest Price
              </SelectItem>
              <SelectItem key="horsepower" value="horsepower">
                Horsepower
              </SelectItem>
            </Select>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="faded" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedCategory}
                onSelectionChange={setSelectedCategory}
              >
                <DropdownItem key="All Vehicles">All Vehicles</DropdownItem>
                <DropdownItem key="Cars">Cars</DropdownItem>
                <DropdownItem key="Trucks">Trucks</DropdownItem>
                <DropdownItem key="SUVs">SUVs</DropdownItem>
                <DropdownItem key="Alternative Fuel">
                  Alternative Fuel
                </DropdownItem>
                <DropdownItem key="GR">GR</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex justify-center flex-wrap gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {allVehicles.map((vehicle: any) => (
              <VehicleCard
                key={vehicle.name}
                image={vehicle.image}
                fuel={vehicle.fuel}
                name={vehicle.name}
                description={vehicle.description}
                price={vehicle.price}
                horsepower={vehicle.horsepower}
                link={vehicle.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
