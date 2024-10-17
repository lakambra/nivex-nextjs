import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbTablets from "@/data/DBAmazon";
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function nuevasTablets2024() {
    return (
        <>
            <Heads
                titulo="Nuevas tablets para productividad 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Descubre las nuevas tablets de 2024 ideales para productividad con análisis detallados y ofertas exclusivas. 
    Compara modelos diseñados para tareas de oficina, trabajo remoto y creatividad, y compra fácilmente en Amazon. 
    Encuentra tablets con rendimiento potente, pantallas de alta resolución y duración de batería optimizada, perfectas para mejorar tu productividad.
    ${dbTablets.tablets.productividad.map(item => item.producto).join(', ')}
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
                        Las nuevas tablets de productividad que puedes comprar en 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Las tablets de productividad se encuentran en todos los rangos de precio: desde opciones más asequibles por debajo de los 300 euros hasta modelos premium que superan los 1.200 euros, cada una enfocada a diferentes tipos de usuarios. No importa tu presupuesto; lo esencial es encontrar la tablet que mejor se adapte a tus necesidades y ofrezca el mayor valor posible por lo que pagas. Ya sea para tomar notas, realizar videollamadas o trabajar en proyectos creativos, siempre buscamos esas tablets que ofrecen un equilibrio ideal entre rendimiento y precio, maximizando su utilidad en el trabajo o estudio.
                    </p>
                </div>
                <img
                    src="https://www.latercera.com/resizer/3EfoxTEnfXbxy0uPiQ36ZBCY67M=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/C6UWWXT6KBH5JMLXPGMOS7PJNE.webp"
                    className="mt-10 px-5 xl:max-w-5xl xl:mx-auto"
                />
                <p className="px-5 mt-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg mb-5">
                    Un año más, buscamos las mejores tablets de productividad que puedes comprar en 2024, centrándonos en aquellos modelos que destacan por su capacidad para optimizar el trabajo y el estudio. En nuestra selección, incluimos tablets equipadas con los procesadores más potentes, pantallas de alta resolución, soporte para lápices ópticos y funciones multitarea avanzadas. Estas tablets ofrecen la mejor experiencia para profesionales y estudiantes, combinando portabilidad, rendimiento y durabilidad, asegurando un nivel de eficiencia superior para los usuarios más exigentes.
                </p>
                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbTablets.tablets.productividad.map((categoria, index) => (
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
