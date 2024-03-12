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
        <div key={item.nameId}>
          <div
            style={{ "--image-url": `url(${item.bannerImage})` }}
            className={"w-full bg-center bg-cover bg-[image:var(--image-url)]"}
          >
            <div className="flex items-start justify-start w-full h-full pt-64 pb-10 pl-4">
              <div className="text-left">
                <div className="container px-4 mx-auto ">
                  <div className="max-w-4xl text-white mx-auto text-left drop-shadow-2xl">
                    <h2 className="text-4xl pb-3 font-bold drop-shadow-xl leading-10 tracking-tight sm:leading-none">
                      Toyota {item.name}
                    </h2>
                    <p className="drop-shadow-xl text-xl">{item.description}</p>
                    <p className="drop-shadow-xl text-md">
                      Starting at ${item.price} / {item.horsepower}hp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-500 bg-opacity-20 rounded-xl m-10 px-20 py-20 text-center flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold">{item.bigDesc}</h1>
            <p className="text-xl font-normal w-1/2">{item.smallDesc}</p>
            <img
              className="w-[500px] pt-10"
              src={`/models/${item.nameId}.png`}
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default VehiclePage;
