import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import db from "@/data/DBAmazon"
import Titulo from "@/components/Titulo";
import SubSeccion from "@/components/SubSeccion";
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function comoElegirUnSmartWatch() {
    return (
        <>
            <Heads
                titulo="Cómo elegir un smartwatch por sistema operativo 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Aprende a elegir el mejor smartwatch de 2024 según su sistema operativo: Wear OS, watchOS, Tizen y más. 
    Compara modelos compatibles con tu smartphone y descubre las mejores funciones para fitness, notificaciones y personalización. 
    Encuentra el smartwatch ideal para ti y compra fácilmente en Amazon.
    ${db.wearables.secciones.map(item => item.titulo).join(', ')}
  `}
            />

            <Header />
            <main className="mt-14">
                <Titulo texto="DEFINE TU PRESUPUESTO"></Titulo>
                <div className="m-auto flex w-3/4 flex-col ">
                    <h2 className="font-bold mt-6 lg:text-lg">
                        Antes de elegir un wearable, es fundamental identificar tus necesidades y estilo de vida. Considera aspectos como el tipo de seguimiento que deseas (salud, fitness, sueño), la duración de la batería, y las funciones adicionales, como conectividad a tu smartphone o alertas personalizadas. Establecer qué características son prioritarias para ti te permitirá seleccionar el dispositivo que mejor se ajuste a tus requerimientos, ya sea que busques un smartwatch, una pulsera de actividad o un dispositivo de salud, y así encontrar la mejor opción dentro de tu presupuesto.
                    </h2>


                    {db.wearables.secciones.map((categoria, index) => (
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
