import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbWearables from "@/data/DBAmazon"
import Heads from "@/components/Heads";

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function mejoresWearables2024() {
  return (
    <>
      <Heads
        titulo="Mejores wearables 2024 | Nivex - Comparativas, análisis y ofertas"
        descripcion={`
    Descubre los mejores wearables de 2024 con análisis detallados y las mejores ofertas. 
    Compara smartwatches, pulseras de actividad, y otros dispositivos que te ayudan a estar conectado y cuidar de tu salud, y compra fácilmente en Amazon. 
    Encuentra wearables con funciones avanzadas, gran diseño y excelente relación calidad-precio.
    ${dbWearables.wearables.topGama.map(item => item.producto).join(', ')}
  `}
      />

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
            Los mejores wearables que puedes comprar en 2024
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            Los wearables se han convertido en dispositivos esenciales para quienes buscan monitorear su salud y mantenerse conectados en 2024. Desde relojes inteligentes hasta auriculares deportivos, estos gadgets ofrecen funciones avanzadas que mejoran la experiencia diaria. Ya sea para seguir tus actividades físicas, controlar tu frecuencia cardíaca o recibir notificaciones en tiempo real, estos dispositivos combinan tecnología y comodidad para adaptarse a tu estilo de vida. En este artículo, te presentamos los mejores wearables de este año, donde la innovación y el diseño se unen para ofrecerte lo mejor en tecnología portátil.
          </p>
        </div>
        <img
          src="https://img.xfinitymobile.com/image/upload/e_trim/w_480,h_600,c_fit,f_auto,q_auto,fl_lossy/v1687872917/client/v2/images/Update-to-the-Watch-BYO-Page/Update-Watch-BYO-Page-01-deals-banner-960.png"
          className="mt-10 px-5 max-w-lg mx-auto"
        />
        <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
          En 2024, los wearables se consolidan como una herramienta indispensable para quienes buscan un estilo de vida más saludable y conectado. Estos dispositivos no solo destacan por su capacidad de seguimiento de la actividad física y la salud, sino también por su integración con aplicaciones que facilitan la gestión de tareas diarias. La atención al detalle en el diseño y la funcionalidad garantiza que los usuarios disfruten de una experiencia intuitiva y cómoda. Además, las mejoras en la duración de la batería y la conectividad aseguran que los wearables estén listos para acompañarte durante todo el día. En este artículo, te mostramos los wearables más destacados de este año, donde la excelencia en tecnología se fusiona con el estilo y la funcionalidad.
        </p>

        <div className="px-5 xl:max-w-5xl xl:mx-auto">
          {dbWearables.wearables.topGama.map((categoria, index) => (
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
