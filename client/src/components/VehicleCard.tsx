import { Card, CardBody, Link } from "@nextui-org/react";

function VehicleCard(props: {
  image: string;
  fuel: string[];
  name: string;
  description: string;
  price: string;
  horsepower: number;
  link: string;
}) {
  let splitFuel = props.fuel.toString();

  if (props.fuel.length > 1) {
    splitFuel = splitFuel.split(",").join(" | ");
  }

  return (
    <Link href={props.link}>
      <Card
        shadow="md"
        className=" border-none bg-background/60 dark:bg-default-100/50 w-[400px] h-[250px]"
      >
        <CardBody className="p-0 flex-row h-full">
          <img className="object-cover w-3/5" src={props.image} />
          <div className="w-2/5 flex flex-col justify-between p-4">
            <div className="flex flex-col">
              <p className="font-normal pb-1 text-sm">{splitFuel}</p>
              <p className="font-black text-lg">{props.name}</p>
              <p className="font-semibold text-md">{props.description}</p>
            </div>
            <div className="flex flex-col pt-4">
              <p className="font-semibold text-xs">Starting at:</p>
              <div className="flex justify-between pb-2">
                <p className="text-sm">${props.price}</p>
                <p className="text-sm">{props.horsepower.toString()}hp</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export default VehicleCard;
