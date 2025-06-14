import React from "react";

const EventCard = ({
  image = "/animals.jpg", // default image from public folder
  title,
  location,
  date,
  time,
  buttonLabel
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border">
      <div className="relative">
        <img src={image} alt="event" className="w-full h-40 object-cover" />
        <button className="absolute bottom-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-md">
          {buttonLabel}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{location}</p>
        <p className="text-sm text-gray-800 font-medium mt-2">
          {date}, {time}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
