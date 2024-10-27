import classes from "./search.module.css";
import search from "@/shared/assets/images/search-icon.png";

export const Search = () => {
  return (
    <div className={classes.container}>
      <input className={classes.input} placeholder="Search location..." />
      <img className={classes.search} src={search} />
    </div>
  );
};
