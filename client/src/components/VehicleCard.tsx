import { Card, CardBody, Button, Link } from "@nextui-org/react";

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
    <Card
      shadow="md"
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[550px] max-h-[500px]"
    >
      <CardBody className="p-0 flex-row h-full">
        <img className="object-cover w-1/2" src={props.image} />
        <div className="w-1/2 flex flex-col justify-between p-6">
          <div className="flex flex-col">
            <p className="font-normal pb-1 text-lg">{splitFuel}</p>
            <p className="font-black text-xl">{props.name}</p>
            <p className="font-semibold text-lg">{props.description}</p>
          </div>
          <div className="flex flex-col pt-8">
            <p className="font-semibold text-sm">Starting at:</p>
            <div className="flex gap-6 pb-2">
              <p>${props.price}</p>
              <p>{props.horsepower.toString()}hp</p>
            </div>
            <Link href={props.link}>
              <Button className="font-semibold">See More</Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default VehicleCard;
