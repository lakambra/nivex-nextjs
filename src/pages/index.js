import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import ResumenCategoria from "@/components/ResumenCategoria";
import { JetBrains_Mono } from "next/font/google";
import Titulo from "@/components/Titulo";
import db from "@/data/DB"

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
        <p className="m-auto w-3/4 font-bold mb-10">
          En Nivex, te ayudamos a encontrar la mejor tecnología disponible en Amazon. Descubre reseñas honestas, guías de compra y comparativas de dispositivos como smartphones, televisores, portátiles y más, todo para que puedas elegir productos de calidad al mejor precio.
        </p>

        <Titulo texto="LO MÁS VISTO" />
        <div className="mt-16 mx-auto w-4/5 items-start flex flex-wrap justify-evenly pb-10">
          {db.masVisto.map((categoria, index) => (
            <ResumenCategoria
              key={index}
              titulo={categoria.titulo}
              linkInterno={categoria.linkInterno}
              linkExterno={categoria.linkExterno}
              categoria={categoria.categoria}
              descripcion={categoria.descripcion}
              imagen={categoria.imagen}
            />
          ))}

        </div>

        <Titulo texto="ULTIMOS LANZAMIENTOS" />
        <div className="mt-16 mx-auto w-4/5 items-start flex flex-wrap justify-evenly pb-10">
          {db.ultLanzamientos.map((categoria, index) => (
            <ResumenCategoria
              key={index}
              titulo={categoria.titulo}
              linkInterno={categoria.linkInterno}
              linkExterno={categoria.linkExterno}
              categoria={categoria.categoria}
              descripcion={categoria.descripcion}
              imagen={categoria.imagen}
            />
          ))}
        </div>
        <Titulo texto="GUIAS RÁPIDAS" />
        <div className="mt-16 mx-auto w-4/5 items-start flex flex-wrap justify-evenly pb-10">
          {db.guiasRapidas.map((categoria, index) => (
            <ResumenCategoria
              key={index}
              titulo={categoria.titulo}
              linkInterno={categoria.linkInterno}
              linkExterno={categoria.linkExterno}
              categoria={categoria.categoria}
              descripcion={categoria.descripcion}
              imagen={categoria.imagen}
            />
          ))}

        </div>
        <Titulo texto="CALIDAD-PRECIO" />
        <div className="mt-16 mx-auto w-4/5 items-start flex flex-wrap justify-evenly pb-10">
          {db.calidadPrecio.map((categoria, index) => (
            <ResumenCategoria
              key={index}
              titulo={categoria.titulo}
              linkInterno={categoria.linkInterno}
              linkExterno={categoria.linkExterno}
              categoria={categoria.categoria}
              descripcion={categoria.descripcion}
              imagen={categoria.imagen}
            />
          ))}
        </div>
      </main>

    </>
  );
}
