import Header from "@/components/Header";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { fontOswald } from "@/utils/fonts";
import { Lato } from "next/font/google";
import Heads from "@/components/Heads";

export default function MejorProductoPage({
  articulo,
  descPag,
  bdArticulo,
  titulo,
  subtitulo,
  descripcion,
  img,
}) {
  return (
    <>
      <Heads
        titulo={`Mejores ${articulo} 2024 | Nivex - Comparativas, análisis y ofertas`}
        descripcion={`${descPag} Los mejores productos que recomendamos son: ${bdArticulo.map(item => item.producto).join(', ')}
      `}
      />
      <Header />
      <main className="mt-14">
        {/* <div className={`${fontJet.className} px-5 xl:max-w-5xl xl:mx-auto`}>
          <span className="text-xs font-bold p-[5px] bg-black text-white tracking-wide">
            SHARON LEMCA-VINCERE
          </span>
          <div className="flex flex-row gap-5 mt-2 tracking-wider">
            <span className="text-xs font-bold">SCIENCE</span>
            <span className="text-xs font-bold">JUN 29, 2024 8:08 AM</span>
          </div>
        </div> */}
        <div className="mt-4 px-5 xl:max-w-5xl xl:mx-auto">
          <h1
            className={`${fontOswald.className} text-3xl font-bold tracking-wide xl:text-5xl`}
          >
            {titulo}
          </h1>
          <p className="font-bold mt-6 lg:text-lg">
            {subtitulo}
          </p>
        </div>
        <img
          src={img}
          className="mt-10 px-5 max-w-lg mx-auto"
        />
        <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
          {descripcion}
        </p>
        <div className="px-5 xl:max-w-5xl xl:mx-auto">
          {bdArticulo.map((categoria, index) => (
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
