import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResumenCategoriaGrande from "@/components/ResumenCategoriaGrande";
import { Lato } from "next/font/google";
import { Oswald } from "next/font/google";

const fontLeto = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const fontOswald = Oswald({ subsets: ["latin"] });

export default function Televisiones() {
  return (
    <>
      <Header />
      <main className={fontLeto.className}>
        <div className="flex flex-col items-center my-20">
          {/* <h1 className="text-2xl 2xl:text-4xl font-extrabold">Móviles: Análisis y Novedades</h1>
           */}
          <h1
            className={`${fontOswald.className} text-3xl 2xl:text-4xl font-extrabold tracking-wide`}
          >
            Televisiones
          </h1>
          <h2 className="mt-4 tracking-wider max-w-64 text-center">
            {" "}
            Análisis y novedades sobre las mejores televisiones del mercado en 2024 y
            más allá
          </h2>
        </div>
        <div className="overflow-x-hidden px-5 mb-5 md:max-w-6xl mx-auto">
          <ResumenCategoriaGrande
            titulo="Las mejores televisiones que puedes comprar en 2024"
            linkInterno="/categorias/televisiones"
            linkExterno="/categorias/televisiones/mejoresTV2024"
            categoria="TELEVISIONES"
            descripcion="Desde pantallas OLED hasta televisores 8K, descubre las mejores opciones para disfrutar de tus series y películas favoritas con la mayor calidad de imagen. Samsung, LG, Sony y otros gigantes de la tecnología te traen lo último."
            imagen="https://images.samsung.com/is/image/samsung/latin_UN55KU6500FXZA_001_Front_black?$624_624_PNG$"
          />
          <ResumenCategoriaGrande
            titulo="Nuevas Smart TVs con inteligencia artificial y 8K"
            linkInterno="/categorias/televisiones"
            linkExterno="/categorias/televisiones/nuevas-smart-tv-2024"
            categoria="TELEVISIONES"
            descripcion="Las últimas Smart TVs llegan con inteligencia artificial avanzada y resoluciones 8K impresionantes. Descubre lo último de LG, Sony y Samsung para disfrutar de una experiencia visual inigualable."
            imagen="https://www.ultrontechnology.es/wp-content/uploads/2024/08/dd2697de-136e-4398-93a7-bed6bf10a354.png"
          />
        </div>
      </main>
    </>
  );
}
