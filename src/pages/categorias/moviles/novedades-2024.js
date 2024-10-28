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

export default function novedades2024() {
    return (
        <>
            <Heads
                titulo="Mejores móviles plegables 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Descubre los mejores móviles plegables de 2024 con análisis detallados y las mejores ofertas. 
    Compara modelos innovadores, encuentra el que se ajuste a tu estilo y compra fácilmente en Amazon. 
    Explora smartphones plegables de última generación que combinan diseño y tecnología avanzada.
    ${dbMovil.moviles.plegables.map(item => item.producto).join(', ')}
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
                        Los mejores móviles de 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Hay móviles plegables en todos los precios imaginables: desde opciones más accesibles hasta auténticos topes de gama que superan los 2.000 euros. Estos dispositivos están diseñados para quienes buscan lo mejor en innovación y tecnología, combinando diseño, versatilidad y funcionalidad en un solo dispositivo. Con características avanzadas como pantallas flexibles de alta resolución, sistemas de cámaras de última generación y un rendimiento potente, los móviles plegables ofrecen una experiencia única que redefine el uso del smartphone. Si en algo coincidimos todos, es en que estos móviles representan la vanguardia y el futuro del diseño en el mundo de la tecnología.
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
                    {dbMovil.moviles.plegables.map((categoria, index) => (
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
