import { useState } from "react";
import classes from "./navigator.module.css";
export const Navigator = () => {
  const [active, setActive] = useState("Today");
  return (
    <nav className={classes.nav}>
      <div
        onClick={() => setActive("Today")}
        className={active === "Today" ? classes.active : ""}
      >
        Today
      </div>
      <div
        onClick={() => setActive("Tommorow")}
        className={active === "Tommorow" ? classes.active : ""}
      >
        Tommorow
      </div>
      <div
        onClick={() => setActive("Monthly")}
        className={active === "Monthly" ? classes.active : ""}
      >
        Monthly Forecast
      </div>
    </nav>
  );
};
