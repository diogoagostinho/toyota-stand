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
        <div
          className={`w-full bg-center bg-cover bg-[url(${item.bannerImage})]`}
        >
          <div className="flex items-start justify-start w-full h-full bg-gray-900 bg-opacity-50 py-20">
            <div className="text-left">
              <div className="container px-4">
                <div className="max-w-4xl text-left">
                  <h2 className="mt-8 mb-6 text-2xl lg:text-2xl font-bold text-gray-100">
                    Toyota {item.name}
                  </h2>
                  <p className=" max-w-md mb-10 text-md font-semibold text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default VehiclePage;
