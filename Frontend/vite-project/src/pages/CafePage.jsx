import React from "react";
import EventCard from "../components/EventCard"; 

const CafePage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Cafes & Food Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          image="/cafe1.jpg"
          title="Cafe Mocha Delight"
          location="Connaught Place, Delhi"
          date="Fri, Jun 21"
          time="4:00 PM IST"
          buttonLabel="Reserve"
        />
        <EventCard
          image="/cafe2.jpg"
          title="Chai Pe Charcha"
          location="Hauz Khas Village"
          date="Sat, Jun 22"
          time="6:30 PM IST"
          buttonLabel="Join Now"
        />
        <EventCard
          image="/food1.jpg"
          title="Pizza & Games Night"
          location="CyberHub, Gurugram"
          date="Sun, Jun 23"
          time="8:00 PM IST"
          buttonLabel="Book Seat"
        />
        <EventCard
          image="/food2.jpg"
          title="Coffee Brewing Workshop"
          location="Saket, Select City Mall"
          date="Mon, Jun 24"
          time="2:00 PM IST"
          buttonLabel="Register"
        />
        <EventCard
          image="/cafe3.jpg"
          title="Live Music & Food Fest"
          location="Rajouri Garden"
          date="Tue, Jun 25"
          time="7:00 PM IST"
          buttonLabel="Free Entry"
        />
        <EventCard
          image="/food3.jpg"
          title="South Indian Breakfast Tasting"
          location="Kalkaji"
          date="Wed, Jun 26"
          time="9:00 AM IST"
          buttonLabel="Taste Now"
        />
      </div>
    </div>
  );
};

export default CafePage;

