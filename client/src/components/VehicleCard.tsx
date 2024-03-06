import { Card, CardBody, Button, Link } from "@nextui-org/react";

function VehicleCard(props: {
  image: string;
  fuel: string;
  name: string;
  description: string;
  price: string;
  horsepower: string;
  link: string;
}) {
  return (
    <Card
      shadow="md"
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[550px] max-h-[500px]"
    >
      <CardBody className="p-0 flex-row h-full">
        <img className="object-cover w-1/2" src={`/thumbs/${props.image}`} />
        <div className="w-1/2 flex flex-col p-6">
          <div className="flex flex-col">
            <p className="font-normal pb-1 text-lg">{props.fuel}</p>
            <p className="font-black text-xl">{props.name}</p>
            <p className="font-semibold text-lg">{props.description}</p>
          </div>
          <div className="flex flex-col pt-8">
            <div className="flex gap-6 pb-2">
              <p>{props.price}</p>
              <p>{props.horsepower}</p>
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
