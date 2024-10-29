import React from "react";

export default function Contact(props) {
  const contactInfo = {
    contactName: "Bartosz Chmielecki",
    contactAdress: "Zabrze 41-806",
    contactNumber: "+48 533 320 515",
  };
  return (
    <div className="w-full bg-slate-800 text-white" id="contact">
      <div className=" m-auto w-full max-w-[1240px] h-[60vh] md:w-[100%] md:h-[50vh] max-h-[400px]  flex flex-col md:flex-row justify-center align-middle ">
        <div className="p-6 w-[80%] md:w-[40%] h-[45%] md:h-[80%] m-auto bg-slate-500 border-2 border-slate-800 rounded-md shadow-md shadow-slate-900">
          <h1 className="text-slate-100 text-xl md:text-2xl font-bold pb-1 md:pb-5">
            Contact
          </h1>
          <ul className="text-md">
            <li className="text-slate-200 text-md md:text-lg pb-2 md:pb-1">
              {contactInfo.contactName}
            </li>
            <li className="text-slate-200 text-md md:text-lg pb-2 md:pb-1">
              {contactInfo.contactNumber}
            </li>
            <li className="text-slate-200 text-md md:text-lg pb-2 md:pb-1">
              {contactInfo.contactAdress}
            </li>
          </ul>
        </div>
        <div className="p-6 w-[80%] md:w-[40%] h-[45%] md:h-[80%] m-auto bg-slate-500 rounded-md shadow-md border-2 border-slate-800 shadow-slate-900">
          <h1 className="text-slate-100 text-xl md:text-2xl font-bold pb-1 md:pb-5">
            Socials
          </h1>
          <ul className="text-md">
            <li className="text-slate-200 text-md md:text-lg pb-2 md:pb-1">
              {props.instagram}
            </li>
            <li className="text-slate-200 text-md md:text-lg pb-2 md:pb-1">
              {props.facebook}
            </li>
            <li className="text-slate-200 text-md md:text-lg pb-2 md:pb-1">
              Zabrze 41-806
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
