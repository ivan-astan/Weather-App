import { Navigator } from "@/features/weather";
import classes from "./header.module.css";
import {FC} from "react";
import {capitalize} from "@/shared";

type Props = {
    header: string;
    description: string;
}
export const Header: FC<Props> = ({header, description}) => {
  return (

    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={header === 'weather' ? 'https://openweathermap.org/img/wn/02d@4x.png' : ''} alt={header === 'weather' ? 'cloudy' : ''} />
        <h1>{capitalize(header)} App</h1>
        <div>
            {description}</div>
      </div>
      <Navigator header={header}/>
    </header>


  );
};
