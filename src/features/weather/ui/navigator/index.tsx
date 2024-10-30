import { useState } from "react";
import classes from "./navigator.module.css";
export const Navigator = () => {
  const [active, setActive] = useState("Weather");
  return (
    <nav className={classes.nav}>
      <div
        onClick={() => setActive("Weather")}
        className={active === "Weather" ? classes.active : ""}
      >
        Today
      </div>
      <div
        onClick={() => setActive("News")}
        className={active === "News" ? classes.active : ""}
      >
          News
      </div>
    </nav>
  );
};
