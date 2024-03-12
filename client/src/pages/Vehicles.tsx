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

  const handleSelectionFilter = async (e) => {
    setSelectedFilter(e.currentKey.toString());
  };

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/all")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/all/highprice")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/all/lowprice")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/all/horsepower")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars/highprice")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars/lowprice")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars/horsepower")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/trucks")
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars/trucks/highprice")
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars/trucks/lowprice")
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/cars/trucks/horsepower")
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/suvs")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/suvs/highprice")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/suvs/lowprice")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/suvs/horsepower")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/alternatives")
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/alternatives/highprice")
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/alternatives/lowprice")
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/alternatives/horsepower")
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/grs")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/grs/highprice")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/grs/lowprice")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("http://localhost:5000/vehicles/grs/horsepower")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  function MappingVehicles() {
    if (selectedCategory.currentKey == "All Vehicles") {
      return allVehicles.map((vehicle: any) => (
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
      ));
    } else if (selectedCategory.currentKey == "Cars") {
      return cars.map((vehicle: any) => (
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
      ));
    } else if (selectedCategory.currentKey == "Trucks") {
      return trucks.map((vehicle: any) => (
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
      ));
    } else if (selectedCategory.currentKey == "SUVs") {
      return suvs.map((vehicle: any) => (
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
      ));
    } else if (selectedCategory.currentKey == "Alternative Fuel") {
      return alternatives.map((vehicle: any) => (
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
      ));
    } else if (selectedCategory.currentKey == "GR") {
      return grs.map((vehicle: any) => (
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
      ));
    } else {
      return allVehicles.map((vehicle: any) => (
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
      ));
    }
  }

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
          <div className="flex justify-start flex-wrap gap-6">
            <MappingVehicles />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
