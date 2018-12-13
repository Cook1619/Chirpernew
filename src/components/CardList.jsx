import React from 'react';
import Newcard from './NewCard';


const Cardlist = (props) => {
  
  let cards = props.items.map((card, index) => {
    return <Newcard key={index} cardDetails={card} />;
  });

  return (
      <div className="container">
        <div className="row flex-md-row">
            <div className="col">{cards}</div>
        </div>
      </div>
  );
};




export default Cardlist;