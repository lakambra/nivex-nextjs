import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import dbMovil from "@/data/DBAmazon"
import Titulo from "@/components/Titulo";
import SubSeccion from "@/components/SubSeccion";
import Heads from "@/components/Heads";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

export default function comoelegirelmejormovil() {
    return (
        <>
            <Heads
                titulo="Cómo elegir una televisión por OLED, QLED o HDR 2024 | Nivex - Comparativas, análisis y ofertas"
                descripcion={`
    Aprende cómo elegir la mejor televisión de 2024 según su tecnología: OLED, QLED, HDR y más. 
    Compara modelos que ofrecen la mejor calidad de imagen, contraste y brillo para disfrutar del entretenimiento en casa, y compra fácilmente en Amazon. 
    Descubre las diferencias entre OLED, QLED y HDR para encontrar la televisión perfecta para tu hogar.
    ${dbMovil.televisiones.secciones.map(item => item.titulo).join(', ')}
  `}
            />


            <Header />
            <main className="mt-14">
                <Titulo texto="DEFINE TU PRESUPUESTO"></Titulo>
                <div className="m-auto flex w-3/4 flex-col ">
                    <h2 className="font-bold mt-6 lg:text-lg">
                        Antes de elegir un televisor, es fundamental establecer un rango de precios. Esto te permitirá filtrar las opciones y encontrar el modelo que mejor se ajuste a tus necesidades sin exceder tu presupuesto. Tanto si buscas un televisor económico, de gama media o uno de gama alta con las últimas tecnologías como OLED o 8K, definir tu presupuesto te ayudará a tomar una decisión más informada y evitar gastos innecesarios. Al tener un presupuesto claro, también puedes priorizar las características más importantes para ti, como el tamaño de pantalla, la calidad de imagen o las funciones inteligentes.
                    </h2>
                    {dbMovil.televisiones.secciones.map((categoria, index) => (
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
