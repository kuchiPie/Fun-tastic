import React from "react";
import Banner from "./Banner";
const HomePage = () => {
  return (
    <>
      <div className="w-screen flex justify-center">
        <Banner />
      </div>
      <div className="flex flex-row flex-wrap w-full px-20 mt-4 mb-4">
        <div className="flex justify-around w-full">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Physical Activity
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                includes activities such as walking, running, cycling, swimming,
                dancing, and playing sports. Physical activity is important for
                maintaining good health and well-being, and it is recommended
                that adults engage in at least 150 minutes of moderate-intensity
                physical activity or 75 minutes of vigorous-intensity physical
                activity per week, in addition to muscle-strengthening
                activities on at least two days per week.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Basic First AID
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Basic first aid refers to the immediate care given to a person
                who has been injured or is experiencing a medical emergency
                until professional medical help arrives. Assess the situation:
                Before providing any first aid, assess the situation to make
                sure it is safe for you to approach the person.
              </p>
            </div>
          </a>
        </div>

        <div className="flex justify-around w-full mt-4">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Emotional and Mental Health
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Emotional and mental health refers to our overall psychological
                well-being. It encompasses how we feel, think, and behave, and
                includes our ability to manage our emotions, cope with stress,
                and maintain healthy relationships.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Healthy Eating
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Healthy eating refers to a balanced and nutritious diet that
                provides the body with the nutrients it needs to function
                properly. A healthy diet is one that emphasizes whole,
                nutrient-dense foods and limits processed foods and added
                sugars. By making small changes to your diet and listening to
                your body, you can develop healthy eating habits that support
                good health and well-being.
              </p>
            </div>
          </a>
        </div>

        <div className="flex justify-around w-full mt-4">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sex Education
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sex education is the process of providing information and
                education about human sexuality, sexual anatomy, reproductive
                health, and sexual relationships.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Human Rights
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Human rights are the fundamental rights and freedoms that are inherent to all human beings, regardless of race, ethnicity, gender, religion, or any other status.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
