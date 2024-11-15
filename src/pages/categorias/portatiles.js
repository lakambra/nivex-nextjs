import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResumenCategoriaGrande from "@/components/ResumenCategoriaGrande";
import { Lato } from "next/font/google";
import { Oswald } from "next/font/google";
import db from "@/data/DB";
import Heads from "@/components/Heads";

const fontLeto = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontOswald = Oswald({ subsets: ["latin"] });
const todosLosDatos = [
    db.calidadPrecio,
    db.masVisto,
    db.ultLanzamientos,
    db.guiasRapidas
];
let allItems = todosLosDatos.flat();
const datosFiltrados = allItems.filter(item => item.categoria === "PORTÁTILES");


export default function portatiles() {
    return (
        <>
            <Heads
                titulo="Noticias sobre portátiles | Nivex - Tecnología y portátiles, comparativas y análisis"
                descripcion={`
    Noticias sobre portátiles, análisis y comparativas de los mejores portátiles del mercado en 2024 y más allá. 
    Encuentra información sobre las últimas novedades en tecnología de portátiles.
    ${datosFiltrados.map(item => item.titulo).join(', ')}
  `}
            />

            <Header />
            <main className={fontLeto.className}>
                <div className="flex flex-col items-center my-20">
                    {/* <h1 className="text-2xl 2xl:text-4xl font-extrabold">Móviles: Análisis y Novedades</h1>
           */}
                    <h1
                        className={`${fontOswald.className} text-3xl 2xl:text-4xl font-extrabold tracking-wide`}
                    >
                        Portátiles
                    </h1>
                    <h2 className="mt-4 tracking-wider max-w-64 text-center">
                        {" "}
                        Análisis y novedades sobre los mejores portátiles del mercado en 2024 y más allá.
                    </h2>
                </div>
                <div className="overflow-x-hidden px-5 mb-5 md:max-w-6xl mx-auto">
                    {datosFiltrados.map((categoria, index) => (
                        <ResumenCategoriaGrande
                            key={index}
                            titulo={categoria.titulo}
                            linkInterno={categoria.linkInterno}
                            linkExterno={categoria.linkExterno}
                            categoria={categoria.categoria}
                            descripcion={categoria.descripcion}
                            imagen={categoria.imagen}
                        />
                    ))}

                </div>

            </main>
        </>
    );
}
