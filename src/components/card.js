import React from "react";

export default function Card() {
  const arr = [
    {
      car_name: "BUGATTI",
      car_image:
        "https://hips.hearstapps.com/hmg-prod/images/07-chiron-dynamic-34-front-web-1499959186.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      disc1: "My Bugatti color is Blue",
      disc2: "Its a bit older than 2024",
    },
    {
      car_name: "MERCIDES",
      car_image:
        "https://hips.hearstapps.com/hmg-prod/images/07-chiron-dynamic-34-front-web-1499959186.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      disc1: "My Bugatti color is Blue",
      disc2: "Its a bit older than 2024",
    },
    {
      car_name: "BMW",
      car_image:
        "https://hips.hearstapps.com/hmg-prod/images/07-chiron-dynamic-34-front-web-1499959186.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      disc1: "My Bugatti color is Blue",
      disc2: "Its a bit older than 2024",
    },
    {
      car_name: "MY ALPHA",
      car_image:
        "https://hips.hearstapps.com/hmg-prod/images/07-chiron-dynamic-34-front-web-1499959186.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      disc1: "My Bugatti color is Blue",
      disc2: "Its a bit older than 2024",
    },
  ];

  return arr.map((car) => {
    return (
      <div className="container ">
        <div className="card" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src={car.car_image}
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{car.car_name}</h4>
            <p className="card-text">{car.disc1}</p>
            <p className="card-text">{car.disc2}</p>
          </div>
        </div>
      </div>
    );
  });
}
