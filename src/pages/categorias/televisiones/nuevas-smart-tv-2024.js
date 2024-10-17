import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbTV from "@/data/DBAmazon";
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function nuevasSmartTV() {
    return (
        <>
            <Heads
                titulo="Nuevas televisiones IA y 8K 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Descubre las nuevas televisiones con tecnología IA y resolución 8K de 2024. 
    Compara modelos de última generación que ofrecen inteligencia artificial para una mejor experiencia de usuario, imágenes ultra definidas y compra fácilmente en Amazon. 
    Encuentra televisores 8K con funciones avanzadas y calidad de imagen impresionante, perfectos para el hogar del futuro.
    ${dbTV.televisiones.IA8k.map(item => item.producto).join(', ')}
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
                        Las mejores televisiones que puedes comprar en 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Hay televisores en todos los precios imaginables: desde menos
                        de 200 euros hasta por encima de los 900 euros, enfocados a
                        públicos distintos. No importa tu presupuesto: si en algo
                        nos ponemos todos de acuerdo es en buscar los televisores
                        que nos ofrecen más de lo que cuestan, aquellos con la mejor
                        relación calidad-precio.
                    </p>
                </div>
                <img
                    src="https://images.samsung.com/is/image/samsung/latin_UN55KU6500FXZA_001_Front_black?$624_624_PNG$"
                    className="mt-10 px-5 xl:max-w-5xl xl:mx-auto"
                />
                <p className="px-5 mt-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg mb-5">
                    Un año más, buscamos los mejores televisores de 2024, centrándonos en aquellos modelos que destacan por su innovación, calidad de imagen y rendimiento. En nuestra selección incluimos los televisores más avanzados del mercado, equipados con tecnologías de última generación como paneles OLED, Mini LED, resoluciones 8K y funciones de inteligencia artificial. Estos modelos ofrecen la mejor experiencia de visualización para cine en casa, gaming y entretenimiento, asegurando un nivel de calidad superior para los usuarios más exigentes.
                </p>
                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbTV.televisiones.IA8k.map((categoria, index) => (
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
