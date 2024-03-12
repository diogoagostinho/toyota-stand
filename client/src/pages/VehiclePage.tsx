import axios from "axios";
import { useEffect, useState } from "react";

function VehiclePage() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    document.title = "Toyota Corolla";

    axios
      .get("http://localhost:5000/vehicles/specs")
      .then((cars) => setCar(cars.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {car.map((item: any) => (
        <div>
          <img src={item.bannerImage} />
          <p>Toyota {item.name}</p>
          <p>{item.price}</p>
          <p>{item.horsepower}</p>
          <p>{item.bigDesc}</p>
          <p>{item.smallDesc}</p>
          <p>{item.fuel}</p>
          <img src={item.ctaImage1} />
          <img src={item.ctaImage2} />
          <img src={item.exteriorImage} />
          <img src={item.interiorImage} />
          <img src={item.modelImage} />
        </div>
      ))}
    </>
  );
}

export default VehiclePage;
