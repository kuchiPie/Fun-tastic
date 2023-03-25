import React from "react";
import Card from "../utils/Card";
import {dummyCourseData} from "../utils/dummyCourse"
const Marketplace = () => {
  return (
    <>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            {dummyCourseData.map((item,i)=>{
                return(<Card item={item} key={i} />);
            })}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
