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

export default function mejoresAuricularesInEar() {
    return (
        <>
            <Heads
                titulo="Mejores auriculares in-ear 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Descubre los mejores auriculares in-ear de 2024 con análisis detallados y las mejores ofertas. 
    Compara modelos compactos con excelente calidad de sonido y compra fácilmente en Amazon. 
    Encuentra auriculares in-ear con gran rendimiento y comodidad, perfectos para cualquier ocasión.
    ${dbAuriculares.auriculares.inear.map(item => item.producto).join(', ')}
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
                        Los mejores auriculares in-ear de gama alta que puedes comprar en 2024
                    </h1>
                    <p className="font-bold mt-6 lg:text-lg">
                        Los auriculares in-ear de alta gama se han convertido en una elección imprescindible para quienes buscan calidad de sonido y comodidad en sus dispositivos móviles. Ideales para disfrutar de música con una claridad excepcional, sumergirse en la narrativa de una película o captar cada matiz de un podcast, estos auriculares ofrecen una experiencia auditiva envolvente. En este artículo, te presentamos los mejores auriculares in-ear de 2024, donde la innovación tecnológica y el diseño ergonómico se combinan para brindar el mejor rendimiento y satisfacción auditiva.
                    </p>
                </div>

                <img
                    src="https://m.media-amazon.com/images/I/71QQqwzc9vL._AC_SL1500_.jpg"
                    className="mt-10 px-5 max-w-lg mx-auto"
                />
                <p className="px-5 mt-10 mb-10 font-bold xl:max-w-5xl xl:mx-auto xl:text-lg">
                    En 2024, los auriculares de alta gama se consolidan como una elección indispensable para los verdaderos aficionados al audio. Más allá de la conveniencia de la conectividad inalámbrica, estos dispositivos destacan por su calidad de sonido excepcional, que ofrece una experiencia auditiva envolvente y detallada. La atención meticulosa a los materiales y la tecnología utilizada se traduce en una durabilidad y comodidad superior, permitiendo disfrutar de largas sesiones sin molestias. Además, la avanzada duración de la batería asegura que los usuarios puedan disfrutar de su música durante horas sin interrupciones. En este artículo, te presentamos los auriculares de alta gama más destacados de este año, donde la excelencia en calidad de sonido se combina con un diseño sofisticado.
                </p>
                <div className="px-5 xl:max-w-5xl xl:mx-auto">
                    {dbAuriculares.auriculares.inear.map((categoria, index) => (
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
