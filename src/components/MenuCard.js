import React from "react";

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
  return (
    <>
      <div className="container d-flex flex-wrap">
        {menuData.map((currEle) => {
          return (
            <>
              <div className="card m-3" style={{width:"18em"}} key={currEle.id}>
                <img src={currEle.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{currEle.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button  className="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
