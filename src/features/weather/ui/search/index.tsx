import classes from './search.module.css';
import search from '@/shared/assets/images/search-icon.png';
import { useForm } from 'react-hook-form';
import { FC, memo } from 'react';

type Props = {
    placeholder: string;
    value: string;
    onSubmit: (value: string) => void;
};
type FormType = {
    value: string;
};
export const Search: FC<Props> = memo(({ placeholder, value, onSubmit }) => {
    const { register, handleSubmit } = useForm<FormType>({
        defaultValues: {
            value,
        },
    });
    const submit = (data: FormType) => {
        onSubmit(data.value);
    };
    const handleImageClick = () => {
        handleSubmit(submit)();
    };
    return (
        <form onSubmit={handleSubmit(submit)} className={classes.container}>
            <input
                className={classes.input}
                placeholder={placeholder}
                autoComplete="off"
                {...register('value')}
            />

            <img
                className={classes.search}
                src={search}
                onClick={handleImageClick}
            />
        </form>
    );
});
