import React from 'react';
import Display from './Components/Display';

function App() {
    const [search, setSearch] = React.useState('');
    const [data, setData] = React.useState({});

    const handleSearch = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=1b551357e49047a490f141406231403&q=${search}&aqi=no`)
            .then(res => res.json())
            .then((data) => {
                if (data.error === undefined) {
                    setData(data);
                } else {
                    alert(data.error.message);
                    setSearch('');
                    setData({});
                }
            });
    };

    return (
        <div className="">
            <div className="pt-12 mx-auto w-/3">
                <h1 className="text-white font-abril-fatface font-rubik font-bold text-3xl text-center mb-12">
                    Weather App
                </h1>
                <div className="flex justify-center p-6">
                <input
                    className="font-abril-fatface font-rubik py-2 pl-4 rounded-lg w-4/6 text-orange-500 text-lg outline-none"
                    text="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter City Name"
                />
                <button
                    className="w-2/6 bg-orange-500 py-3 px-3 rounded-lg text-white font-abril-fatface font-rubik font-bold text-lg"
                    onClick={handleSearch}
                >
                    Search
                </button>
                </div>
            </div>
            <Display data={data} />
        </div>
    );
}

export default App;