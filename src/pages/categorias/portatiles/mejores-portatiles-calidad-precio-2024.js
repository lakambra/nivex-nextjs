import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbPortatiles from "@/data/DBAmazon"

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function MejorMovilDe2024() {
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
                        Los mejores portátiles de 2024 en calidad-precio
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Los portátiles se han convertido en una herramienta esencial para profesionales y estudiantes que buscan maximizar su productividad. Ya sea para trabajar en proyectos, realizar videoconferencias o disfrutar de contenidos multimedia, un buen portátil ofrece un equilibrio ideal entre rendimiento y coste. En este artículo, te mostramos los mejores portátiles de 2024 en calidad-precio.
                    </p>
                </div>
                <img
                    src="https://p2-ofp.static.pub//fes/cms/2024/02/08/nehcwbzuupknir3ijlpo02ekhst8aw236332.png"
                    className="mt-10 px-5 w-full md:w-3/4 lg:w-2/4 xl:w-1/4 h-auto mx-auto"
                />
                <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
                    Un año más, los portátiles de calidad-precio siguen siendo una opción popular entre los usuarios que buscan un equilibrio entre coste y rendimiento. La portabilidad, junto con la capacidad de realizar múltiples tareas de manera eficiente, son algunas de las principales ventajas de estos dispositivos. Además, es fundamental considerar aspectos como la duración de la batería, la calidad de la pantalla y la ergonomía del teclado. En este artículo, te mostramos los portátiles que destacan en 2024 por su relación calidad-precio.
                </p>
                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbPortatiles.portatiles.calidadPrecio.map((categoria, index) => (
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
