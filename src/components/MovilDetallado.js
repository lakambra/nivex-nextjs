import { Lato } from "next/font/google";

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
}) {
  return (
    <div className="mt-5">
      <h3 className="text-2xl font-extrabold mb-5">{producto}</h3>
      <img src={imagen} alt={producto} className="md:max-w-lg mx-auto" />
      <div className={fontLato.className}>
        <p className="mt-5 text-lg sm:text-xl 2xl:text-xl">{descripcion}</p>
      </div>
      <div className="mt-5 border-t-2 border-b-2 pt-5 pb-5 sm:pb-10 md:pb-5">
        <div className="flex items-center sm:max-w-lg md:max-w-xl xl:max-w-2xl mx-auto">
          <div className="relative">
            <div className="flex flex-row">
              <h4 className="font-bold text-base">{productoAmazon}</h4>
              <img
                className="size-16 mr-2 mt-4 sm:size-28 2xl:mr-12"
                src={imagen}
                alt={producto}
              />
            </div>
            <div className="sm:absolute sm:top-20 md:top-12 lg:top-12 xl:top-12">
              <button className="text-sm mt-3 bg-yellow-300 rounded-lg p-1 px-2 transition-all hover:bg-yellow-400">
                Precio en Amazon - <strong>{precio}</strong>
              </button>
              <p className="text-xs mt-3 text-gray-500">
                * Algún precio puede haber cambiado desde la última revisión
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
