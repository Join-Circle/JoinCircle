import React from "react";
import EventCard from "../components/EventCard";

const Home = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <EventCard
        image="/animals.jpg"
        title="Wildlife Awareness Meetup"
        location="Central Park, Delhi"
        date="Sun, Jun 30"
        time="10:00 AM IST"
        buttonLabel="Join Now"
      />
      <EventCard
        image="/sports.jpg"
        title="Stress Management Seminar"
        location="Jangpura, Rajdoot Hotel · Delhi"
        date="Sat, Jun 14"
        time="2:30 PM IST"
        buttonLabel="Free Seminar"
      />
      <EventCard
        image="/movie.jpg"
        title="Wildlife Awareness Meetup"
        location="Central Park, Delhi"
        date="Sun, Jun 30"
        time="10:00 AM IST"
        buttonLabel="Join Now"
      />
      <EventCard
        image="/cafe.jpg"
        title="Wildlife Awareness Meetup"
        location="Central Park, Delhi"
        date="Sun, Jun 30"
        time="10:00 AM IST"
        buttonLabel="Join Now"
      />
      <EventCard
        image="/hack.jpg"
        title="Wildlife Awareness Meetup"
        location="Central Park, Delhi"
        date="Sun, Jun 30"
        time="10:00 AM IST"
        buttonLabel="Join Now"
      />
        <EventCard
        image="/eventc.jpg"
        title="Wildlife Awareness Meetup"
        location="Central Park, Delhi"
        date="Sun, Jun 30"
        time="10:00 AM IST"
        buttonLabel="Join Now"
      />
    </div>
  );
};

export default Home;
