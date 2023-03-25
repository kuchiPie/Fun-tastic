import React from "react";

const CreateCourse = () => {
  return (
    <>
      <div class="min-h-screen flex items-center mt-4 mb-10">
        <div class="w-full">
          <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
            Create Course For Students
          </h2>
          <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
              <div class="mb-3">
                <label for="name" class="block mb-2 font-bold text-gray-600">
                  Course Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Put in your fullname."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="block mb-2 font-bold text-gray-600">
                  Course Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div class="mb-5">
                <label for="message" class="block mb-2 font-bold text-gray-600">
                  Course Description
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your Course Description"
                ></textarea>
              </div>

              <div class="flex items-center justify-center w-full mb-4">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">
                        Click to Upload Thumbnail
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <label for="message" class="block mb-2 font-bold text-gray-600">
                  Course Modules 
                </label>
              <div className="flex flex-wrap mb-4">
              
                <div class="flex items-center px-4 border border-green-400 rounded mx-3 mt-2">
                  <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-checkbox-1"
                    class="w-full py-4 ml-2 text-sm font-medium "
                  >
                    Nodejs
                  </label>
                </div>

                <div class="flex items-center px-4 border border-green-400 rounded mx-3 mt-2">
                  <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-checkbox-1"
                    class="w-full py-4 ml-2 text-sm font-medium "
                  >
                    ReactJs
                  </label>
                </div>

                <div class="flex items-center px-4 border border-green-400 rounded mx-3 mt-2">
                  <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-checkbox-1"
                    class="w-full py-4 ml-2 text-sm font-medium "
                  >
                   Next-js
                  </label>
                </div>

                <div class="flex items-center px-4 border border-green-400 rounded mx-3 mt-2">
                  <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-checkbox-1"
                    class="w-full py-4 ml-2 text-sm font-medium "
                  >
                    Axios
                  </label>
                </div>

                <div class="flex items-center px-4 border border-green-400 rounded mx-3 mt-2">
                  <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-checkbox-1"
                    class="w-full py-4 ml-2 text-sm font-medium "
                  >
                    Truffle
                  </label>
                </div>
              </div>
              
              <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
