import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbMovil from "@/data/DBAmazon"

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function MejorMovilDe2024() {
  return (
    <>
      <Header />
      <main className="mt-14">
        <div className={`${fontJet.className} px-5 xl:max-w-5xl xl:mx-auto`}>
          <span className="text-xs font-bold p-[5px] bg-black text-white tracking-wide">
            SHARON LEMCA-VINCERE
          </span>
          <div className="flex flex-row gap-5 mt-2 tracking-wider">
            <span className="text-xs font-bold">SCIENCE</span>
            <span className="text-xs font-bold">JUN 29, 2024 8:08 AM</span>
          </div>
        </div>
        <div className="mt-4 px-5 xl:max-w-5xl xl:mx-auto">
          <h1
            className={`${fontOswald.className} text-3xl font-bold tracking-wide xl:text-5xl`}
          >
            Los mejores móviles de 2024
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            Hay móviles Android en todos los precios imaginables: desde opciones asequibles a auténticos topes de gama que superan los 1.200 euros. Estos últimos están diseñados para quienes buscan lo mejor de lo mejor, sin importar el precio. Con características avanzadas como cámaras de alta resolución, pantallas de calidad premium y rendimiento de primer nivel, estos dispositivos ofrecen la mejor experiencia tecnológica disponible. Si en algo coincidimos todos, es en que estos móviles representan la cúspide de la innovación y el lujo en el mundo Android.
          </p>
        </div>
        <img
          src="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
          className="mt-10 px-5 xl:max-w-5xl xl:mx-auto"
        />
        <p className="px-5 mt-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
          Un año más, buscamos los móviles Android con una mejor relación
          calidad-precio de este 2024, buscando aquellos terminales que dan de
          sí el presupuesto para traer la mejor configuración posible a su rango
          de precio. Incluiremos en nuestra lista los móviles disponibles este
          año, aunque hayan sido lanzados con anterioridad.
        </p>
        <div className="px-5 xl:max-w-5xl xl:mx-auto">
          {dbMovil.moviles.topGama.map((categoria, index) => (
            <MovilDetallado
              key={index}
              producto={categoria.producto}
              imagen={categoria.imagen}
              descripcion={categoria.descripcion}
              productoAmazon={categoria.productoAmazon}
              precio={categoria.precio}
              linkProductoAmazon={categoria.linkProductoAmazon}
            />
          ))}


        </div>
      </main>
    </>
  );
}
