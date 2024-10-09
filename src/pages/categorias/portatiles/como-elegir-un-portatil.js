import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbPortatiles from "@/data/DBAmazon"
import Titulo from "@/components/Titulo";
import SubSeccion from "@/components/SubSeccion";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function comoelegirelmejormovil() {
    return (
        <>
            <Header />
            <main className="mt-14">
                <Titulo texto="DEFINE TU PRESUPUESTO"></Titulo>
                <div className="m-auto flex w-3/4 flex-col ">
                    <h2 className="font-bold mt-6 lg:text-lg">
                        Antes de elegir un portátil, es crucial definir tus necesidades específicas y el uso que le darás. Considera aspectos como el rendimiento del procesador, la duración de la batería, la calidad de la pantalla y el tamaño. Si buscas un dispositivo para trabajo, estudio o gaming, cada uno tendrá requisitos distintos. Por ejemplo, los portátiles para gaming requieren una tarjeta gráfica potente y un sistema de refrigeración eficiente, mientras que para el estudio o trabajo, la portabilidad y la duración de la batería pueden ser más importantes. Establecer tus prioridades te ayudará a encontrar el modelo que mejor se adapte a tu estilo de vida y presupuesto, ya sea que busques un portátil económico, de gama media o premium.
                    </h2>

                    {dbPortatiles.portatiles.secciones.map((categoria, index) => (
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
