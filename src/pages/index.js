import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import ResumenCategoria from "@/components/ResumenCategoria";
import { JetBrains_Mono } from "next/font/google";
import Titulo from "@/components/Titulo";

const fontJet = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nivex - Tecnología y móviles, comparativas y análisis</title>
        <link rel="icon" type="image/png" href="/images/1.png" />
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="rDJ6SDzDvNgj_Bq75dweJgoe9o-EWl3cmOhG2NecGNE"
        />
        <meta
          name="description"
          content="Nivex - Tu fuente de información sobre tecnología y móviles, con comparativas y análisis detallados."
        />
      </Head>

      <Header />
      <main className="mt-16">
        <Titulo texto="LO MÁS VISTO" />
        <div className="mt-16 px-5 sm:mx-auto md:items-start md:max-w-7xl flex flex-wrap justify-evenly pb-7">
          <ResumenCategoria
            titulo="Los mejores móviles que puedes comprar en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/mejor-movil-de-2024-test"
            categoria="MÓVILES"
            descripcion="Ya sea un móvil de última generación o una opción más asequible. Te mostramos lo mejor de Apple, Samsung, Google y más. "
            imagen="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
          />
          <ResumenCategoria
            titulo="Las mejores televisiones que puedes comprar en 2024"
            linkInterno="/categorias/televisiones"
            linkExterno="/categorias/televisiones/mejoresTV2024"
            categoria="TELEVISIONES"
            descripcion="Desde pantallas OLED hasta televisores 8K, descubre las mejores opciones para disfrutar de tus series y películas favoritas con la mayor calidad de imagen. Samsung, LG, Sony y otros gigantes de la tecnología te traen lo último."
            imagen="https://images.samsung.com/is/image/samsung/latin_UN55KU6500FXZA_001_Front_black?$624_624_PNG$"
          />
          <ResumenCategoria
            titulo="Las mejores tablets que puedes comprar en 2024"
            linkInterno="/categorias/tablets"
            linkExterno="/categorias/tablets/mejoresTablets2024"
            categoria="TABLETS"
            descripcion="Encuentra la tablet ideal para trabajar o entretenerte. Ya sea una iPad Pro de Apple o una opción potente de Samsung, aquí te mostramos las mejores opciones para cada necesidad."
            imagen="https://cdn.andro4all.com/andro4all/2024/06/huawei-matepad-11-5-s.png"
          />


          <ResumenCategoria
            titulo="Los mejores auriculares/in-ear que puedes comprar en 2024"
            linkInterno="/categorias/auriculares"
            linkExterno="/categorias/auriculares/mejoresAuriculares2024"
            categoria="AURICULARES"
            descripcion="Sumérgete en la música con los auriculares más innovadores del momento. Desde los AirPods de Apple hasta las opciones de Sony y Bose, aquí están los mejores modelos con cancelación de ruido y sonido premium."
            imagen="https://cdn.avpasion.com/wp-content/uploads/2024/09/mejores-auriculares-204-14.webp"
          />

          <ResumenCategoria
            titulo="Los mejores portátiles que puedes comprar en 2024"
            linkInterno="/categorias/portatiles"
            linkExterno="/categorias/portatiles/mejoresportatiles2024"
            categoria="PORTATILES"
            descripcion="Ya sea para gaming, productividad o edición de contenido, descubre los portátiles que lideran el mercado. Te mostramos lo último de Dell, HP, Apple, y otros para ayudarte a elegir."
            imagen="https://leasein.co/wp-content/uploads/2024/03/notebook-xps-15-9530-t-black-gallery-5.webp"
          />

          <ResumenCategoria
            titulo="Los mejores wearables que puedes comprar en 2024"
            linkInterno="/categorias/wearables"
            linkExterno="/categorias/wearables/mejoreswearables2024"
            categoria="WEARABLES"
            descripcion="Mantente conectado con los wearables más avanzados del mercado. Desde los Apple Watch hasta los Galaxy Watch, descubre los dispositivos que mejoran tu salud, fitness y estilo."
            imagen="https://www.wivai.com/on/demandware.static/-/Sites-promocaixa-m-catalog/default/dw4b369b19/deporteyocio/Garmin/121-4004953/GarminEPIX2_FrontA_600x600.png"
          />

        </div>

        <Titulo texto=""></Titulo>




      </main>

    </>
  );
}
