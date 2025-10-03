import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaClock, FaCircle } from "react-icons/fa";

export default function HeaderInfo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const location = "Medellín, Colombia";
  const availability = "Disponible para trabajar";

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-info" id="header-info">
       <div className="info-item availability">
        < FaCircle className="icon" /> <span className="Word" >{availability}</span>
      </div>

      <section>

      <div className="info-item">
         <span>{location}</span>
      </div>
      <div className="info-item hour">
        <FaClock className="icon" /> <span >{time}</span>
      </div>
      </section>
     
    </div>
  );
}
