import React from "react";

export const WhatsAppButton = () => {
  // Reemplaza con tu número real de Venezuela
  // Formato: 58 + código sin el 0 + número. Ej: 584121234567
  const phoneNumber = "584220331995";
  const message = "Hola Dann, vi tu portafolio y me gustaría contactarte.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat en WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16,2A13,13,0,0,0,8,25.23L2.92,27.11a1,1,0,0,0,1,1L9,26.15A13,13,0,1,0,16,2Z"
          fill="#25D366"
        />
        <path
          d="M21.19,19.34c-0.29-0.14-1.71-0.85-2-0.95s-0.45-0.14-0.64,0.14s-0.74,0.95-0.9,1.14S17.36,20,17.07,19.81s-1.25-0.46-2.38-1.47c-0.88-0.79-1.48-1.76-1.65-2.06s-0.02-0.46,0.13-0.6c0.13-0.13,0.29-0.34,0.43-0.51s0.19-0.29,0.28-0.47s0.05-0.34-0.02-0.47s-0.64-1.55-0.88-2.12c-0.23-0.56-0.47-0.48-0.64-0.49s-0.35,0-0.54,0s-0.51,0.07-0.78,0.36S9.69,13.4,9.69,15s1.76,3.15,2,3.49s3.47,5.3,8.4,7.43c2.93,1.26,4.07,1,5.55,0.93s2.38-0.97,2.72-1.91s0.34-1.57,0.24-1.72S21.47,19.49,21.19,19.34Z"
          fill="#FFF"
        />
      </svg>

      {/* Estilos encapsulados para este componente */}
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: #FFF;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          background-color: #1DA851;
          transform: scale(1.1);
        }

        .whatsapp-icon {
          width: 35px;
          height: 35px;
          fill: white;
        }

        /* Animación sutil para llamar la atención */
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        /* Ajuste para móviles para que no tape contenido importante */
        @media (max-width: 768px) {
          .whatsapp-float {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </a>
  );
};
