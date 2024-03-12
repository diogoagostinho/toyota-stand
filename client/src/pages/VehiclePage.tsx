import axios from "axios";
import { useEffect, useRef, useState } from "react";

function VehiclePage() {
  const carRef = useRef(0);
  const carId = location.pathname.split("/")[2].toString();
  const [car, setCar] = useState([]);

  useEffect(() => {
    console.log(carId);

    const fetchCar = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/vehicles/${carId}`);
        if (res.data == "") {
          carRef.current = 0;
        } else {
          setCar(res.data);
          carRef.current = 1;
          document.title = "Toyota " + res.data[0].name;
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [carId]);

  return (
    <>
      {car.map((item: any) => (
        <div>
          <div>
            <img src={item.bannerImage} />
          </div>
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
