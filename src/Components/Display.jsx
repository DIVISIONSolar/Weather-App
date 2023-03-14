import Clock from './Clock';

export default function Display ({data}) {
    return (
        <>
        {data.location && (
            <div clasName=''>
                <div className="flex justify-around items-center">
                    <div className="text-center font-abril-fatface font-rubik font-bold">
                        <img src={data.current.condition.icon} alt="" className="mx-auto" />
                        <Clock data={data.current.condition.text} />
                    </div>
                </div>
                <div className="text-center mt-8 px-12 font-normal font-abril-fatface font-rubik text-lg">
                    <h1>
                        Location: {data.location.name}, {data.location.region}, {' '} {data.location.country}.
                    </h1>
                    <p>Wind: {data.current.wind_kph} KPH</p>
                    <p>Wind Direction: {data.current.wind_dir}</p>
                    <p>Humidity: {data.current.humidity}%</p>
                    <p>Temp: {data.current.temp_c} °C</p>
                    <p>Temp: {data.current.temp_f} °F</p>
                </div>
            </div>
        )}
        </>
    );
}