import classes from "./search.module.css";
import search from "@/shared/assets/images/search-icon.png";
import {useForm} from "react-hook-form";
import {useWeatherStore} from "@/features/weather";
import {FC} from "react";

type Props = {
    placeholder: string
}
type FormType = {
    location: string
}
export const Search: FC<Props> = ({placeholder}) => {
    const location = useWeatherStore (state => state.location)
    const changeLocation = useWeatherStore(state => state.changeLocation)
    const { register, handleSubmit } = useForm<FormType>({
        defaultValues: {
            location
        }
    });
    const submit = (data: FormType) => {
        changeLocation(data.location)
    }
    const handleImageClick = () => {
        handleSubmit(submit)();
    };
  return (
    <form onSubmit={handleSubmit(submit)} className={classes.container}>
      <input className={classes.input} placeholder={placeholder} autoComplete="off" {...register('location')}/>

      <img className={classes.search} src={search} onClick={handleImageClick} />
    </form>
  );
};
