import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbAuriculares from "@/data/DBAmazon"
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function mejoresAuricularesCalidadPrecio() {
    return (
        <>
            <Heads
                titulo="Mejores auriculares calidad-precio 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Encuentra los mejores auriculares calidad-precio de 2024 con análisis detallados y las mejores ofertas. 
    Compara modelos que ofrecen gran sonido y confort a precios accesibles, y compra fácilmente en Amazon. 
    Descubre auriculares económicos y de gran rendimiento, perfectos para cualquier presupuesto.
    ${dbAuriculares.auriculares.calidadPrecio.map(item => item.producto).join(', ')}
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
                        Los mejores auriculares de 2024 en calidad-precio
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Los auriculares son un accesorio imprescindible para muchos usuarios
                        de smartphones, ya sea para escuchar música, ver vídeos o disfrutar de
                        una buena película. En este artículo, te mostramos los mejores
                        auriculares de 2024 en calidad-precio.
                    </p>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/71QQqwzc9vL._AC_SL1500_.jpg"
                    className="mt-10 px-5 w-full md:w-3/4 lg:w-2/4 xl:w-1/4 h-auto mx-auto"
                />
                <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
                    Un año más, los auriculares inalámbricos siguen siendo una de las opciones más populares entre los usuarios de smartphones. La comodidad de no tener que lidiar con cables es una de las principales ventajas de este tipo de auriculares, pero también hay que tener en cuenta la calidad de sonido, la duración de la batería y la comodidad de uso. En este artículo, te mostramos los mejores auriculares de 2024 en calidad-precio.
                </p>
                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbAuriculares.auriculares.calidadPrecio.map((categoria, index) => (
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
