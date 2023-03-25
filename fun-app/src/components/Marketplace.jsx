import React from "react";
import Card from "../utils/Card";
import {dummyCourseData} from "../utils/dummyCourse"
const Marketplace = () => {
  return (
    <>
      <h1 class="mb-4 text-4xl text-center mt-3 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Available Courses</h1>
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
