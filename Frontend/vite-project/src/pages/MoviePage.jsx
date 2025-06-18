import React from "react";
import EventCard from "../components/EventCard"; // adjust path if needed

const MoviePage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Movie Screenings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          image="/movie1.jpg"
          title="Inception - Special Screening"
          location="PVR Cinemas, Delhi"
          date="Sat, Jun 22"
          time="6:00 PM IST"
          buttonLabel="Book Now"
        />
        <EventCard
          image="/movie2.jpg"
          title="The Dark Knight Returns"
          location="INOX, Noida"
          date="Sun, Jun 23"
          time="5:30 PM IST"
          buttonLabel="Buy Ticket"
        />
        <EventCard
          image="/movie3.jpg"
          title="Barbie: Girls Night Out"
          location="Cinepolis, Gurgaon"
          date="Mon, Jun 24"
          time="7:00 PM IST"
          buttonLabel="Join Us"
        />
        <EventCard
          image="/movie4.jpg"
          title="Interstellar - Science Behind Film"
          location="Delhi Planetarium"
          date="Tue, Jun 25"
          time="4:00 PM IST"
          buttonLabel="Limited Seats"
        />
        <EventCard
          image="/movie5.jpg"
          title="Oppenheimer: Director’s Cut"
          location="DT Cinemas, Saket"
          date="Wed, Jun 26"
          time="8:00 PM IST"
          buttonLabel="Reserve"
        />
        <EventCard
          image="/movie6.jpg"
          title="Marvel Marathon - Day 1"
          location="Carnival Cinemas, Rohini"
          date="Thu, Jun 27"
          time="12:00 PM IST"
          buttonLabel="Get Pass"
        />
      </div>
    </div>
  );
};

export default MoviePage;
