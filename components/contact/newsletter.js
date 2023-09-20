import React, { useState } from "react";
import Image from "next/image";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Strapi API to create a new subscriber
      const response = await axios.post(
        "http://localhost:1337/api/subscribers",
        {
          email,
        }
      );

      // Handle the response as needed (e.g., show a success message)
      console.log(response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error(error);
    }
  };

  return (
    <div class="p-6 xl:w-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
      <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
        <Image
          src="/img/contact/email-xl.png"
          width={1000}
          height={667}
          alt=""
          className="mx-auto"
        />
      </div>
      <div class="w-full xl:w-1/2 xl:pl-40 xl:py-28">
        <h1 class="text-3xl md:text-4xl xl:text-5xl font-bold leading-10 mb-4 text-center xl:text-left md:mt-0 mt-4">
          Newsletter
        </h1>
        <p class="text-xl leading-normal text-center xl:text-left">
          Harmonisez votre vie professionnelle et personnelle.
        </p>

        <form onSubmit={handleSubmit} class="flex items-stretch mt-12">
          <input
            class="bg-gray-100 rounded-lg rounded-r-none font-semibold text-base leading-none text-whtie floral p-5 w-4/5 border border-transparent focus:outline-none focus:border-pale-salmon"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Votre Email"
          />
          <button
            type="submit"
            class=" rounded-l-none hover:bg-pale-salmon bg-dark-cerulean rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pale-salmon"
          >
            S'enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
