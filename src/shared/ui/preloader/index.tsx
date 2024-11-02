import preloader from './preloader.svg';

export const Preloader = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img style={{ height: '800px' }} src={preloader} />
        </div>
    );
};
