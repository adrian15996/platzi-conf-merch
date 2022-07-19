import React, { useContext } from "react";
import "../styles/components/Success.css";
import { ChartMap } from "./ChartMap";
import { useForwardGeocoding } from "../hooks/useforwardGeocoding";
import { AppContext } from "../context/AppContext";
const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const location = useForwardGeocoding(
    `${buyer[0].address}, ${buyer[0].colony}, ${buyer[0].cp} ${buyer[0].city}, ${buyer[0].state}`
  );
  const { map } = location;
  // console.log(direccion);
  console.log(location);

  return (
    <div className="Success">
      <div className="Succes-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Succes-map">
          <ChartMap latitude={map.latitude} longitude={map.longitude} />
        </div>
      </div>
    </div>
  );
};

export { Success };
