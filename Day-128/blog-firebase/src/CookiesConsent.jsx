import React, { useState } from "react";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(!Cookies.get("user-consent"));

  const handleAccept = () => {
    Cookies.set("user-consent", "true", { expires: 365 }); // Cookie expires in 1 year
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
        <p>
          We use cookies to improve your experience. By using our app, you
          consent to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="bg-green-500 px-4 py-2 rounded text-black hover:bg-green-600"
        >
          Accept
        </button>
      </div>
    )
  );
}
