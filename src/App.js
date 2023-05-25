import React from 'react';
import './App.css';
import { BackgroundImage } from './features/backgroundimage/BackgroundImage';
import Weather from './features/weather/Weather';
import BackgroundImageLeftControl from './features/backgroundimage/components/BackgroundImageLeftControl';
import BackgroundImageRightControl from './features/backgroundimage/components/BackgroundImageRightControl';
import Journal from './features/journal/journal';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Weather/>
      </header>
      < aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeftControl />
      </aside>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      <main>
        <Journal />
      </main>

    </div>
  );
}

export default App;
