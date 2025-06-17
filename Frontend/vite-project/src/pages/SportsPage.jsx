import React from "react";
import EventCard from "../components/EventCard"; 

const SportsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Sports Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          image="/sports1.jpg"
          title="Cricket Championship"
          location="Feroz Shah Kotla Stadium, Delhi"
          date="Thu, Jun 20"
          time="5:00 PM IST"
          buttonLabel="Get Tickets"
        />
        <EventCard
          image="/sports2.jpg"
          title="Delhi Marathon"
          location="India Gate"
          date="Sun, Jun 23"
          time="6:00 AM IST"
          buttonLabel="Register"
        />
        <EventCard
          image="/sports3.jpg"
          title="Football Friendly Match"
          location="Jawaharlal Nehru Stadium"
          date="Fri, Jun 28"
          time="7:30 PM IST"
          buttonLabel="Book Now"
        />
        <EventCard
          image="/sports4.jpg"
          title="Yoga for Beginners"
          location="Lodhi Garden"
          date="Sat, Jun 29"
          time="7:00 AM IST"
          buttonLabel="Join Free"
        />
        <EventCard
          image="/sports5.jpg"
          title="Badminton League"
          location="Siri Fort Sports Complex"
          date="Wed, Jun 26"
          time="5:00 PM IST"
          buttonLabel="Enroll"
        />
        <EventCard
          image="/sports6.jpg"
          title="Table Tennis Tournament"
          location="Talkatora Stadium"
          date="Mon, Jul 1"
          time="3:00 PM IST"
          buttonLabel="Participate"
        />
      </div>
    </div>
  );
};

export default SportsPage;
