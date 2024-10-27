import { useState } from "react";
import classes from "./select.module.css";

export const TemperatureSelect = () => {
  const [temperature, setTemperature] = useState("c");
  return (
    <div className={classes.container}>
      <span className={classes.temperature}>°C</span>
      <label className={classes.switch}>
        <input
          type="checkbox"
          onClick={() => setTemperature(temperature === "c" ? "f" : "c")}
        />
        <span className={classes.slider}></span>
      </label>
      <span className={classes.temperature}>°F</span>
    </div>
  );
};
