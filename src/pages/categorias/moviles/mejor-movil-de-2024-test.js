import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";

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
            Los mejores móviles de 2024 en relación calidad-precio
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            Hay móviles Android en todos los precios imaginables: desde menos de
            200 euros a por encima de los 900 euros, enfocados a publicos
            distintos. No importa tu presupuesto: si en algo nos ponemos todos
            de acuerdo es en buscar los móviles que nos dan más de lo que
            cuestan, aquellos con la mejor relación calidad-precio.
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
          <MovilDetallado
            producto="Google Pixel 7a"
            imagen="https://i.blogs.es/cdb3d2/pixel/1366_2000.webp"
            descripcion="El Google Pixel 7a es el móvil más barato de Google en 2024, pero no por ello es un mal móvil. Es un móvil compacto, con un diseño sencillo y elegante, y una cámara que destaca por su calidad. Además, es un móvil con Android puro, lo que garantiza actualizaciones rápidas y un rendimiento fluido."
            productoAmazon="Google Pixel 7a - Smartphone 5G Android Libre con Lente Gran Angular y batería de 24 Horas de duración - Azul Claro"
            precio="379€"
          />
        </div>
      </main>
    </>
  );
}
