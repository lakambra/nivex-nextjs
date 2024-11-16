import Header from "@/components/Header";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbAuriculares from "@/data/DBAmazon"
import Titulo from "@/components/Titulo";
import SubSeccion from "@/components/SubSeccion";
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function ComoElegirElMejorAuricular() {
    return (
        <>
            <Heads
                titulo="Cómo elegir auriculares según tu economía 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Aprende cómo elegir los mejores auriculares según tu presupuesto en 2024. 
    Compara modelos con gran calidad de sonido a precios accesibles y encuentra la opción ideal para ti. 
    Descubre auriculares económicos, de gama media y alta, y compra fácilmente en Amazon. 
    ${dbAuriculares.auriculares.secciones.map(item => item.titulo).join(', ')}
  `}
            />

            <Header />
            <main className="mt-14">
                <Titulo texto="DEFINE TU PRESUPUESTO"></Titulo>
                <div className="m-auto flex w-3/4 flex-col ">
                    <h2 className="font-bold mt-6 lg:text-lg">
                        Antes de elegir unos auriculares, es esencial definir tus preferencias y necesidades. Considera aspectos como la calidad de sonido, la comodidad, la duración de la batería y las funciones adicionales, como la cancelación de ruido o conectividad Bluetooth. Establecer qué características son prioritarias para ti te permitirá seleccionar el modelo que mejor se adapte a tu estilo de vida y presupuesto, ya sea que busques unos auriculares económicos, de gama media o premium.
                    </h2>

                    {dbAuriculares.auriculares.secciones.map((categoria, index) => (
                        <SubSeccion
                            key={index}
                            titulo={categoria.titulo}
                            descripcion={categoria.descripcion}
                            jsonn={categoria.jsonn}
                        />
                    ))}

                </div>
            </main>
        </>
    );
}
