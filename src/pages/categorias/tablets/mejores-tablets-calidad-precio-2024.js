import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbTablets from "@/data/DBAmazon";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function mejoresTabletsCalidadPrecio() {
    return (
        <>
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
                        Las mejores tablets calidad-precio que puedes comprar en 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Las tablets con la mejor relación calidad-precio cubren todos los rangos de presupuesto: desde modelos más accesibles por debajo de los 300 euros hasta opciones de gama media que ofrecen características premium a precios competitivos. Estas tablets combinan pantallas de alta resolución, buen rendimiento y duración de batería, brindando una experiencia fluida en productividad y entretenimiento. Ya sea para estudiar, trabajar o realizar videollamadas, siempre buscamos opciones que maximicen la calidad en relación al costo, garantizando un excelente equilibrio entre prestaciones y precio ajustado.
                    </p>
                </div>
                <img
                    src="https://www.latercera.com/resizer/3EfoxTEnfXbxy0uPiQ36ZBCY67M=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/C6UWWXT6KBH5JMLXPGMOS7PJNE.webp"
                    className="mt-10 px-5 xl:max-w-5xl xl:mx-auto"
                />
                <p className="px-5 mt-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg mb-5">
                    Un año más, buscamos las mejores tablets calidad-precio que puedes comprar en 2024, destacando aquellos modelos que logran equilibrar rendimiento y accesibilidad. En nuestra selección, incluimos tablets con procesadores eficientes, pantallas nítidas, buena autonomía y un diseño cómodo para el uso diario. Estos modelos ofrecen características premium sin necesidad de gastar una fortuna, siendo ideales para estudiantes, profesionales y usuarios que buscan un dispositivo versátil y funcional. Estas tablets garantizan un rendimiento óptimo sin sacrificar calidad ni presupuesto, maximizando cada euro invertido.
                </p>
                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbTablets.tablets.calidadPrecio.map((categoria, index) => (
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