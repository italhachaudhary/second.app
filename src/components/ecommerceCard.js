import React from "react";

export const EcommerceCard = ({ input }) => {
  return input.map((c) => {
    return (
      <div className="container-fluid"> 
        <div className="card" style={{ width: "18rem" }}>
          <h5 className="card-title">{c.p_name}</h5>
          <img className="card-img-top" src={c.p_image} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              {c.p_price} {c.p_discount}
            </p>
          </div>
        </div>
      </div>
    );
  });
};
