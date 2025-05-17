import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "6285710532090"; 
  const message = "Halo, Saya ingin bertanya tanya tentang produk Anda"; 
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "15px",
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        fontSize: "24px",
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppButton;
