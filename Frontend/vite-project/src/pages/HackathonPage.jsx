import React from "react";
import EventCard from "../components/EventCard";

const HackathonPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Exciting Hackathons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          image="/hack1.jpg"
          title="AI Hackathon"
          location="IIT Delhi"
          date="Fri, Jun 21"
          time="9:00 AM IST"
          buttonLabel="Apply Now"
        />
        <EventCard
          image="/hack2.jpg"
          title="Women in Tech Hack"
          location="NSUT, Delhi"
          date="Sat, Jun 22"
          time="10:00 AM IST"
          buttonLabel="Register"
        />
        <EventCard
          image="/hack3.jpg"
          title="Blockchain Hackathon"
          location="T-Hub, Hyderabad"
          date="Mon, Jun 24"
          time="11:00 AM IST"
          buttonLabel="Join Free"
        />
        <EventCard
          image="/hack4.jpg"
          title="Cybersecurity Challenge"
          location="Virtual Event"
          date="Tue, Jun 25"
          time="1:00 PM IST"
          buttonLabel="Participate"
        />
        <EventCard
          image="/hack5.jpg"
          title="Web3 India Hack"
          location="BITS Pilani"
          date="Wed, Jun 26"
          time="9:30 AM IST"
          buttonLabel="Apply"
        />
        <EventCard
          image="/hack6.jpg"
          title="Hack the Future"
          location="Google Gurgaon Campus"
          date="Sat, Jun 29"
          time="8:00 AM IST"
          buttonLabel="Limited Seats"
        />
      </div>
    </div>
  );
};

export default HackathonPage;
