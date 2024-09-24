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

export default function mejoresTV2024() {
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
            Las mejores televisiones de 2024 en relación calidad-precio
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            Hay televisores en todos los precios imaginables: desde menos
            de 200 euros hasta por encima de los 900 euros, enfocados a
            públicos distintos. No importa tu presupuesto: si en algo
            nos ponemos todos de acuerdo es en buscar los televisores
            que nos ofrecen más de lo que cuestan, aquellos con la mejor
            relación calidad-precio.
          </p>
        </div>
        <img
          src="https://images.samsung.com/is/image/samsung/latin_UN55KU6500FXZA_001_Front_black?$624_624_PNG$"
          className="mt-10 px-5 xl:max-w-5xl xl:mx-auto"
        />
        <p className="px-5 mt-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg mb-5">
          Un año más, buscamos los televisores con la mejor relación calidad-precio de este 2024, enfocándonos en aquellos modelos que maximizan el rendimiento dentro de su rango de precio. Incluiremos en nuestra lista los televisores disponibles este año, aunque hayan sido lanzados con anterioridad.
        </p>
        <div className="px-5 xl:max-w-5xl xl:mx-auto">
          <MovilDetallado
            producto="Samsung CU6905"
            imagen="https://i.blogs.es/edfab2/captura-de-pantalla-2024-08-07-a-las-9.33.12/1366_2000.png"
            descripcion="El Samsung CU6905 es el televisor más asequible de Samsung en 2024, pero eso no significa que carezca de calidad. Ofrece un diseño moderno y elegante, y su rendimiento de imagen destaca por la claridad y el brillo. Además, cuenta con la interfaz Smart TV de Samsung, lo que garantiza acceso fácil a aplicaciones y contenido, así como actualizaciones frecuentes para mantener tu experiencia al día."
            productoAmazon="Samsung CU6905 - SAMSUNG TV Crystal UHD 4K 2024 43CU7095 Smart TV de 43 con PurColor, Procesador Crystal UHD, SmartThings, Contrast Enhancer con HDR10+ y Smart TV Powered by Tizen [Clase de eficiencia energética G]"
            precio="348,92€"
            linkProductoAmazon="https://www.amazon.es/SAMSUNG-43CU7095-PurColor-Procesador-SmartThings/dp/B0CSDTTJ9W/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.YNkHwkyIAABzSYGqSKHeGnJ5WyGbOBQdMTZZK_PZV4GWPSN6yM5jB7Z_Y914lV0i.idE33-3pbFx8jKsfQCc2e0kZcDiPZcsBUUgwSMUte_E&dib_tag=se&keywords=Samsung+CU6905&qid=1726953551&s=electronics&sr=1-1&ufe=INHOUSE_INSTALLMENTS%3AES_IHI_4M_AUTOMATED"
          />
        </div>
      </main>
    </>
  );
}
