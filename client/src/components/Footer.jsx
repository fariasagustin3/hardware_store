import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-full bg-white">
      <div className="px-5 py-5 md:flex md:items-start md:w-full md:justify-between md:px-16">
        {/* info section */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--lightblue)] mb-5">Información</h2>
          <ul className="flex flex-col gap-3">
            <li className="text-black font-medium text-lg cursor-pointer hover:underline">
              Inicio
            </li>
            <li className="text-black font-medium text-lg cursor-pointer hover:underline">
              Sobre Nosotros
            </li>
            <li className="text-black font-medium text-lg cursor-pointer hover:underline">
              Contacto
            </li>
            <li className="text-black font-medium text-lg cursor-pointer hover:underline">
              ¿Dónde estamos?
            </li>
            <li className="text-black font-medium text-lg cursor-pointer hover:underline">
              Servicio Técnico
            </li>
          </ul>
        </div>

        {/* social media section */}
        <div className="mt-5 md:mt-0">
          <h2 className="text-2xl font-bold text-[var(--lightblue)] mb-5">
            Redes Sociales
          </h2>
          <ul className="flex items-center gap-5 my-5">
            <li className="px-3 py-3 bg-[#B21F24] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </li>
            <li className="px-3 py-3 rounded-full bg-[#364F86]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </li>
            <li className="px-3 py-3 rounded-full bg-[#1D9BF0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </li>
          </ul>
        </div>

        {/* ubications */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--lightblue)] mb-5">¿En dónde encontrarnos?</h2>
          <ul className="flex flex-col gap-5">
            <li className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">
                Hardware Store Mar del Plata
              </h3>
              <p className="text-sm font-medium">Di Maria 123, Mar del Plata</p>
              <p className="text-sm font-medium">+54 2236436586</p>
              <p className="text-sm font-medium">Lun a Vie de 9hs a 18hs</p>
            </li>
            <li className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Hardware Store Pilar</h3>
              <p className="text-sm font-medium">Messi 123, Lomas</p>
              <p className="text-sm font-medium">+54 3345236597</p>
              <p className="text-sm font-medium">Lun a Vie de 9hs a 18hs</p>
            </li>
            <li className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Hardware Store CABA</h3>
              <p className="text-sm font-medium">Dibu 123, CABA</p>
              <p className="text-sm font-medium">+54 1154889966</p>
              <p className="text-sm font-medium">Lun a Vie de 9hs a 18hs</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
