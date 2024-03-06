import { useEffect } from "react";

function Vehicles() {
  useEffect(() => {
    document.title = "Toyota - All Vehicles";
  });
  return <div>Vehicles</div>;
}

export default Vehicles;
