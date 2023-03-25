import React from "react";
import Card from "../utils/Card";

const Marketplace = () => {
  return (
    <>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            {[1,2,3,4,5,6,7,8,9,0].map((item,i)=>{
                return(<Card key={i} />);
            })}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
