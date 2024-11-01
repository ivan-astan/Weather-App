import {Header} from "@/widgets/header/ui";
import {Preloader} from "@/shared";
import {Search} from "@/features/weather/ui/search";


export const News = () => {
    const isFetching = false

    return (
        <>
            <Header description={'Your reliable source of current news!'} header={'news'}/>
            {isFetching ? <Preloader /> : <Search placeholder={'Search news...'}/>})
        </>
    )
}