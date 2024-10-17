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

export default function MejorMovilDe2024() {
    return (
        <>
            <Heads
                titulo="Últimos smartwatches para fitness y salud 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Descubre los últimos smartwatches de 2024 enfocados en fitness y salud con análisis detallados y las mejores ofertas. 
    Compara modelos con funciones avanzadas como monitoreo de ritmo cardíaco, seguimiento del sueño y GPS, y compra fácilmente en Amazon. 
    Encuentra el smartwatch perfecto para mejorar tu salud y alcanzar tus objetivos de fitness.
    ${dbWearables.wearables.new.map(item => item.producto).join(', ')}
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
                        Los mejores smartwatches para fitness y salud de 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Los smartwatches se han convertido en herramientas fundamentales para quienes buscan monitorizar su salud y mejorar su rendimiento físico. Con características avanzadas como seguimiento del sueño, monitoreo de la frecuencia cardíaca y capacidades de GPS, estos dispositivos ofrecen una solución integral para mantener un estilo de vida activo. En este artículo, te mostramos los mejores smartwatches de 2024 en el ámbito de fitness y salud.
                    </p>
                </div>
                <img
                    src="https://joyeriacarla.com/wp-content/uploads/2024/04/a34fbf0db158450c6f065f3304d98170a9505a0f-2000x2000-1000.webp"
                    className="mt-10 px-5 w-full md:w-3/4 lg:w-2/4 xl:w-1/4 h-auto mx-auto"
                />
                <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
                    Este año, los smartwatches para fitness y salud continúan siendo una elección popular para quienes buscan un equilibrio entre tecnología avanzada y funcionalidad. La posibilidad de rastrear múltiples métricas de salud, la duración de la batería y la compatibilidad con aplicaciones de terceros son aspectos clave a considerar. En este artículo, te presentamos los modelos que destacan en 2024 por su calidad y características innovadoras.
                </p>


                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbWearables.wearables.new.map((categoria, index) => (
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
