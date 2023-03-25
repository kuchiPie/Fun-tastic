import React from "react";

const Card = ({item}) => {
  console.log(item)
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          {/* <img
            className="rounded-t-lg"
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fsjcit.ac.in%2Fwp-content%2Fuploads%2F2022%2F03%2Fmathematics-png.jpg&tbnid=xk7h5Q0H0QX6qM&vet=12ahUKEwiHlv2J1_f9AhVUkuYKHaXZBrMQMygCegUIARDmAQ..i&imgrefurl=https%3A%2F%2Fsjcit.ac.in%2Fmaths-staff%2F&docid=gkZYAjb3JJnJKM&w=1200&h=800&q=mathematics&ved=2ahUKEwiHlv2J1_f9AhVUkuYKHaXZBrMQMygCegUIARDmAQ"
            // alt={item.name}
          /> */}
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
