import Head from "next/head";
import React, { useState, useEffect } from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
// import PopupWidget from "../components/popupWidget";

import { BsLinkedin } from "react-icons/bs";
import { useForm, useWatch } from "react-hook-form";

import { InlineWidget } from "react-calendly";

import fr from "../locales/fr";

const BookDemo = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const [hutk, setHutk] = useState('');

  useEffect(() => {
    const getHubSpotTrackingCookie = () => {
      const cookies = document.cookie.split('; ');
      const hubspotCookie = cookies.find(row => row.startsWith('hubspotutk='));
      return hubspotCookie ? hubspotCookie.split('=')[1] : null;
    };

    setHutk(getHubSpotTrackingCookie());
  }, []);

  async function handleFormSubmit(event) {
    console.log("handlesubmit ");
    event.preventDefault();

    // Check for form errors
    if (Object.keys(errors).length > 0) {
      console.error("Form has errors. Not submitting.");
      return; // exit early if there are errors
    }

    const portalId = "143410325"; // Replace with your HubSpot portal ID
    const formGuid = "02a3fdf3-4a43-44d9-8190-dc3b03c35fc1"; // Replace with your form GUID
    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const formData = new FormData(event.target);

    // Convert FormData into a simple object
    const formObject = {};
    formData.forEach((value, key) => { formObject[key] = value; });

    // Create fields array dynamically based on the form data
    const fields = Object.keys(formObject).map(key => ({
      objectTypeId: "0-1", // Update this as per your form field's requirements
      name: key,
      value: formObject[key]
    }));

    // Prepare the HubSpot request body
    const hubspotRequestBody = {
      submittedAt: Date.now(),
      fields: fields,
      context: {
        hutk: hutk, // Replace with actual HubSpot tracking cookie value if available
        pageUri: "https://www.people360.fr/book-demo", // Update with your page information
        pageName: "Book-Demo" // Update with your page name
      },
      // legalConsentOptions: {
      //   consent: {
      //     consentToProcess: true,
      //     text: "I agree to allow Example Company to store and process my personal data.",
      //     communications: [
      //       {
      //         value: true,
      //         subscriptionTypeId: 999,
      //         text: "I agree to receive marketing communications from Example Company."
      //       }
      //     ]
      //   }
      // }
    };

    // Perform the HubSpot fetch request
    try {
      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(hubspotRequestBody),
      });
      const result = await response.json();

      if (result.status === "error") {
        console.error("HubSpot submission error:", result.message);
        setIsSuccess(false);
        setMessage(result.message);
      } else {
        console.log("Form submitted to HubSpot successfully.");
        setIsSuccess(true);
        setMessage("Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.");
        event.target.reset();
        reset();
      }
    } catch (error) {
      console.error("Error submitting form to HubSpot:", error);
      setIsSuccess(false);
      setMessage("Une erreur est survenu, veuillez ressayer s'il vous palit.");
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000); // hides alert after 5 seconds
  }

  return (
    <>
      <Head>
        <title>
          People 360 - Une expérience sur-mesure et captivante pour vos
          collaborateurs.
        </title>
        <meta
          name="description"
          content="People 360 - Une expérience sur-mesure et captivante pour vos collaborateurs."
        />
        <link rel="icon" href="/img/ico/favicon.ico" />
      </Head>
      <Container className="relative flex z-10 w-full flex-col space-y-8 px-8 md:px-32 xl:px-0 max-w-screen-xl h-full text-left">
        <Navbar />
      </Container>
      <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 ">
       
        <Container className="flex z-1 w-full flex-col space-y-8 px-32 sm:py-0 items-center justify-center text-left ">
          <div className="flex justify-center items-center w-screen ">
            <div className="container mx-auto my-4 px-4 lg:px-20 ">
              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto mt-32 rounded-2xl shadow-2xl bg-dark-cerulean">
                <div className="flex">
                  <h1 className="font-bold text-floral-white  text-5xl">
                    Contactez-nous directement
                  </h1>
                </div>
                {showAlert && (
                  <div className="fixed bottom-0 right-0 mb-4 mr-4 z-50 max-w-sm">
                    <div className={`border-t-4 px-4 py-3 shadow-md rounded-b ${isSuccess ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900'}`} role="alert">
                      <div class="flex">
                        <div class="py-1">
                          <svg class={`fill-current h-6 w-6 ${isSuccess ? 'text-teal-500' : 'text-red-500'} mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            {/* Icon path here... Adjust the SVG path if you want a different icon for error */}
                          </svg>
                        </div>
                        <div>
                          <p class="font-bold">{isSuccess ? 'Success' : 'Error'}</p>
                          <p class="text-sm">{Message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} id="form">
                  {/* <form onSubmit={handleSubmit(onSubmit)} noValidate id="form"> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-5">
                    {/* <input
                      type="hidden"
                      value={process.env.NEXT_PUBLIC_WEB3FORMS}
                      {...register("apikey")}
                    /> */}
                    <input
                      {...register("firstname", {
                        required: "Prénom est requis.",
                      })}
                      className={`w-full bg-floral-white ${errors.firstName
                          ? "text-red-500 placeholder-red-500"
                          : "text-dark-cerulean"
                        } mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                      type="text"
                      placeholder={
                        errors.firstName ? "Prénom est requis." : "Prénom*"
                      }
                    />
                    <input
                      {...register("lastname", { required: "Nom est requis." })}
                      className={`w-full bg-floral-white ${errors.lastName
                          ? "text-red-500 placeholder-red-500"
                          : "text-dark-cerulean"
                        } mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                      type="text"
                      placeholder={errors.lastName ? "Nom est requis." : "Nom*"}
                    />
                    <input
                      {...register("email", {
                        required: "Adresse e-mail est requise.",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Adresse e-mail invalide",
                        },
                      })}
                      className={`w-full bg-floral-white ${errors.email
                          ? "text-red-500 placeholder-red-500"
                          : "text-dark-cerulean"
                        } mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                      type="email"
                      placeholder={
                        errors.email
                          ? errors.email.message
                          : "Adresse e-mail professionelle*"
                      }
                    />
                    <input
                      {...register("phone", {
                        required: "Téléphone est requis.",
                      })}
                      className={`w-full bg-floral-white ${errors.phone
                          ? "text-red-500 placeholder-red-500"
                          : "text-dark-cerulean"
                        } mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                      type="tel"
                      placeholder={
                        errors.phone ? "Téléphone est requis." : "Téléphone*"
                      }
                    />
                  </div>
                  <div className="my-4">
                    <textarea
                      {...register("message", {
                        required: "Message est requis.",
                      })}
                      className={`w-full bg-floral-white ${errors.message
                          ? "text-red-500 placeholder-red-500"
                          : "text-dark-cerulean"
                        } mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                      placeholder={
                        errors.message ? "Message est requis." : "Message*"
                      }
                    ></textarea>{" "}
                  </div>
                  <div className="my-2 w-1/2 lg:w-1/4">
                    <button
                      className="uppercase text-sm font-bold tracking-wide bg-floral-white text-dark-cerulean p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>

              <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-floral-white rounded-2xl shadow-2xl">
                <div className="flex flex-col text-dark-cerulean">
                  <h1 className="font-bold uppercase text-4xl my-4">
                    Visitez nos locaux
                  </h1>
                  <p className="text-dark-cerulean">
                    Venez découvrir notre startup et ce qui nous rend uniques !
                    Nous serions ravis de vous accueillir et de partager nos
                    innovations avec vous. À bientôt !
                  </p>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Bureau Principal</h2>
                      <p className="text-dark-cerulean">
                        La Grande Arche de La Défense - Paroi Nord. 1, Parvis de
                        la Défense. 92800 Puteaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Appelez nous</h2>
                      <p className="text-dark-cerulean">Tel: 06 61 16 40 23</p>
                      {/* <p className="text-dark-cerulean">Fax: xxx-xxx-xxx</p> */}
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a
                      href="https://www.linkedin.com/company/96953639/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative w-full px-6 md:px-16 bg-pale-salmon">
        <Container className="flex z-1 w-full flex-col space-y-4 sm:space-y-8 px-4 sm:px-8 md:px-16 lg:px-32 items-center justify-center text-left ">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full pt-8 lg:pt-16 space-y-4 lg:space-y-0">
            {/* Bloc du widget */}
            <div className="w-full lg:w-1/2 px-4 sm:px-0">
              <InlineWidget
                styles={{
                  height: "400px",
                  width: "100%",
                  maxWidth: "500px",
                }}
                url="https://calendly.com/hello-people360/30min"
              />
            </div>

            <div className="flex items-center w-full lg:w-1/2 pt-8 lg:pt-16">
              <div className="max-w-xl mb-8 px-4 sm:px-0">
                <h1 className="text-3xl sm:text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
                  {fr.BookDemo.hero.catchPhrase}
                </h1>
                <p className="py-3 sm:py-5 text-lg sm:text-xl leading-normal lg:text-xl xl:text-2xl">
                  {fr.BookDemo.hero.tagline}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative w-full px-6 md:px-16 pt-24">
        <Container className="flex z-1 w-full flex-col space-y-8  px-32 sm:py-0 items-center justify-center text-left ">
          <Footer color={"dark-cerulean"} />
        </Container>
      </section>
      {/* <PopupWidget /> */}
    </>
  );
};

export default BookDemo;
