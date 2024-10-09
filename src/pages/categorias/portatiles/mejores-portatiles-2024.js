import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbAuriculares from "@/data/DBAmazon"

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
            Los mejores portátiles de alta gama que puedes comprar en 2024
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            Los portátiles de alta gama se han convertido en una herramienta esencial para profesionales, creativos y entusiastas de la tecnología en 2024. Ya sea para realizar tareas de edición de video, jugar a los últimos títulos, o llevar a cabo trabajos de programación complejos, estos dispositivos ofrecen un rendimiento excepcional y una experiencia de usuario sin igual. En este artículo, te presentamos los mejores portátiles de alta gama de este año, donde la potencia, la calidad de construcción y la innovación tecnológica se combinan para satisfacer las necesidades más exigentes.
          </p>
        </div>
        <img
          src="https://leasein.co/wp-content/uploads/2024/03/notebook-xps-15-9530-t-black-gallery-5.webp"
          className="mt-10 px-5 max-w-lg mx-auto"
        />
        <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
          En 2024, los portátiles de alta gama se consolidan como una elección indispensable para quienes buscan un rendimiento sobresaliente. Estos dispositivos destacan no solo por su velocidad y potencia de procesamiento, sino también por su diseño elegante y durabilidad. La atención al detalle en la selección de materiales y la ingeniería avanzada se traducen en una experiencia de usuario superior, permitiendo largas jornadas de trabajo o entretenimiento sin compromisos. Además, la duración de la batería y la conectividad mejorada aseguran que los usuarios puedan mantenerse productivos durante todo el día. En este artículo, te mostramos los portátiles más destacados de este año, donde la excelencia en rendimiento y diseño se unen para ofrecerte lo mejor en tecnología.
        </p>

        <div className="px-5 xl:max-w-5xl xl:mx-auto">
          {dbAuriculares.portatiles.topGama.map((categoria, index) => (
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
