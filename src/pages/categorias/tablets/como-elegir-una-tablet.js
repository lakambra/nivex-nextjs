import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbTablets from "@/data/DBAmazon"
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
                        Antes de elegir una tablet de estudio o trabajo, es importante definir tus necesidades y el uso que le darás. Considera aspectos como el rendimiento del procesador, la duración de la batería y el tamaño de la pantalla. Si buscas una tablet para trabajo o estudio, aspectos como la portabilidad, el soporte para lápices ópticos y teclados, y la duración de la batería serán fundamentales. Para tareas más pesadas, el rendimiento multitarea y la capacidad de almacenamiento también son claves. Establecer tus prioridades te ayudará a encontrar la tablet ideal para tu estilo de vida y presupuesto
                    </h2>

                    {dbTablets.tablets.secciones.map((categoria, index) => (
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
