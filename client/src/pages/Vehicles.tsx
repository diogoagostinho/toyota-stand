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

  return (
    <>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center">Toyota Vehicles</h1>
      </div>
      <div className="px-20 justify-center">
        <div className="flex justify-between align-middle items-center pb-6">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
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

          <Select size="sm" label="Order By:" className="max-w-xs">
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
        </div>
      </div>
    </>
  );
}

export default Vehicles;
