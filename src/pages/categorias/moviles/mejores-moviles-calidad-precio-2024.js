<<<<<<< HEAD
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbMovil from "@/data/DBAmazon"
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });
=======
import MejorProductoPage from "@/components/MejorProductoPage";
import dbMovil from "@/data/DBAmazon";
>>>>>>> 79edc57f63042548b21fdb0001b4845c1417f56d

export default function mejoresMovilesCalidadPrecio() {
    return (
        <>
<<<<<<< HEAD
            <Heads
                titulo="Mejores móviles calidad-precio 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Encuentra los mejores móviles calidad-precio de 2024 con análisis detallados y ofertas irresistibles. 
    Compara modelos, ajusta tu presupuesto y compra fácilmente en Amazon. Descubre smartphones de gran rendimiento a precios accesibles. 
    ¡Elige el móvil perfecto para ti sin gastar de más!
    ${dbMovil.moviles.calidadPrecio.map(item => item.producto).join(', ')}
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
                        Los mejores móviles en relación calidad precio de 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Hay móviles de calidad-precio en todos los rangos económicos: desde opciones muy asequibles hasta modelos que ofrecen características premium sin alcanzar precios desorbitados. Estos dispositivos están diseñados para quienes buscan el equilibrio perfecto entre rendimiento y coste, ofreciendo excelentes prestaciones como cámaras competentes, pantallas de buena calidad y autonomía destacable, sin sacrificar el bolsillo. Si en algo coincidimos todos, es en que estos móviles representan las mejores opciones para quienes desean maximizar su inversión, obteniendo más de lo que pagan sin comprometer la experiencia tecnológica.
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
                    {dbMovil.moviles.calidadPrecio.map((categoria, index) => (
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
=======
            <MejorProductoPage
                articulo="móviles calidad-precio"
                descPag={`Encuentra los mejores móviles calidad-precio de 2024 con análisis detallados y ofertas irresistibles. Compara modelos, ajusta tu presupuesto y compra fácilmente en Amazon. Descubre smartphones de gran rendimiento a precios accesibles. ¡Elige el móvil perfecto para ti sin gastar de más!`}
                bdArticulo={dbMovil.moviles.calidadPrecio}
                titulo="Los mejores móviles en relación calidad precio de 2024"
                subtitulo="Hay móviles de calidad-precio en todos los rangos económicos: desde opciones muy asequibles hasta modelos que ofrecen características premium sin alcanzar precios desorbitados. Estos dispositivos están diseñados para quienes buscan el equilibrio perfecto entre rendimiento y coste, ofreciendo excelentes prestaciones como cámaras competentes, pantallas de buena calidad y autonomía destacable, sin sacrificar el bolsillo. Si en algo coincidimos todos, es en que estos móviles representan las mejores opciones para quienes desean maximizar su inversión, obteniendo más de lo que pagan sin comprometer la experiencia tecnológica."
                descripcion="Un año más, buscamos los móviles Android con una mejor relación calidad-precio de este 2024, buscando aquellos terminales que dan de sí el presupuesto para traer la mejor configuración posible a su rango de precio. Incluiremos en nuestra lista los móviles disponibles este año, aunque hayan sido lanzados con anterioridad."
                img="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
            />
>>>>>>> 79edc57f63042548b21fdb0001b4845c1417f56d
        </>
    );
}
