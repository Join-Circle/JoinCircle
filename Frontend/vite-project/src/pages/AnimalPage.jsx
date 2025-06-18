import React from "react";
import EventCard from "../components/EventCard"; 

const AnimalPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Wildlife & Animal Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          image="/animal1.jpg"
          title="Wildlife Photography Workshop"
          location="Sultanpur Bird Sanctuary, Haryana"
          date="Sun, Jun 23"
          time="9:00 AM IST"
          buttonLabel="Register"
        />
        <EventCard
          image="/animal2.jpg"
          title="Animal Conservation Meetup"
          location="National Zoological Park, Delhi"
          date="Mon, Jun 24"
          time="11:00 AM IST"
          buttonLabel="Join Now"
        />
        <EventCard
          image="/animal3.jpg"
          title="Tiger Awareness Talk"
          location="WWF India HQ, Delhi"
          date="Tue, Jun 25"
          time="10:00 AM IST"
          buttonLabel="Free Entry"
        />
        <EventCard
          image="/animal4.jpg"
          title="Jungle Safari Orientation"
          location="Jim Corbett Info Center"
          date="Wed, Jun 26"
          time="12:00 PM IST"
          buttonLabel="Limited Seats"
        />
        <EventCard
          image="/animal5.jpg"
          title="Pet & Vet Health Camp"
          location="Pet Cafe, Gurugram"
          date="Thu, Jun 27"
          time="2:00 PM IST"
          buttonLabel="Book Slot"
        />
        <EventCard
          image="/animal6.jpg"
          title="Elephant Awareness Rally"
          location="India Gate, Delhi"
          date="Fri, Jun 28"
          time="5:00 PM IST"
          buttonLabel="Volunteer"
        />
      </div>
    </div>
  );
};

export default AnimalPage;
