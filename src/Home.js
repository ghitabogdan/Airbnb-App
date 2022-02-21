import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Entire homes" description="Comfortable private places, with room for friednds or family." />
                <Card src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Entire homes" description="Comfortable private places, with room for friednds or family." />
                <Card src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Entire homes" description="Comfortable private places, with room for friednds or family." />
            </div>
            <div className="home__section">
                <Card src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Entire homes" description="Comfortable private places, with room for friednds or family." price="$320/night" />
                <Card src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Entire homes" description="Comfortable private places, with room for friednds or family." price="$320/night" />
                <Card src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Entire homes" description="Comfortable private places, with room for friednds or family." price="$320/night" />
            </div>
        </div>
    )
}

export default Home
