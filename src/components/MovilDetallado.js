import { Lato } from "next/font/google";
import Link from "next/link";

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function MovilDetallado({
  producto,
  imagen,
  descripcion,
  productoAmazon,
  precio,
  linkProductoAmazon,
}) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-extrabold mb-5">{producto}</h3>
      <img src={imagen} alt={producto} className=" mx-auto w-1/4" />
      <div className={`${fontLato.className} mb-10`}>
        <p className="mt-5 text-lg sm:text-xl 2xl:text-xl">{descripcion}</p>
      </div>
      <div className="flex flex-col m-auto max-w-2xl">
        <div className="flex">
          <h4 className="font-bold text-base">{productoAmazon}</h4>
          <img
            className="size-16 mr-2 sm:size-28 2xl:mr-12 ml-4"
            src={imagen}
            alt={producto}
          />
        </div>
        <a href={linkProductoAmazon} target="_blank">
          <button className="text-sm bg-[#FFD814] rounded-lg p-1 px-2 transition-all hover:bg-[#F7CA00]">
            Precio en Amazon - <strong>{precio}</strong>
          </button>
        </a>
        <p className="text-xs mt-3 text-gray-500">
          * Algún precio puede haber cambiado desde la última revisión
        </p>
      </div>
    </div >
  );
}
