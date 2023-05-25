

const Weather = () => {
    return (
        <div className="weather">
            <div className="temperature-container">
                <img src="images/sun.png" alt="weather" id="weather-image" />
                <div className="weather-text">
                    <p className="temperature"> 37C</p>
                    <p className="weather-description">Cloudy</p>
                </div>
            </div>
        </div>
    );

}

export default Weather;