import Header from "@/components/Header";
import ResumenCategoriaGrande from "@/components/ResumenCategoriaGrande";
import db from "@/data/DB";
import Heads from "@/components/Heads"
import { fontLato } from "@/utils/fonts";
import { fontOswald } from "@/utils/fonts";

const todosLosDatos = [
    db.calidadPrecio,
    db.masVisto,
    db.ultLanzamientos,
    db.guiasRapidas
];
let allItems = todosLosDatos.flat();
const datosFiltrados = allItems.filter(item => item.categoria === "TABLETS");

export default function Tablets() {
    return (
        <>
            <Heads
                titulo="Noticias sobre tablets | Nivex - Tecnología y tablets, comparativas y análisis"
                descripcion={`
    Noticias sobre tablets, análisis y comparativas de las mejores tablets del mercado en 2024 y más allá. 
    Encuentra información sobre las últimas novedades en tecnología de tablets.
    ${datosFiltrados.map(item => item.titulo).join(', ')}
  `}
            />

            <Header />
            <main className={fontLato.className}>
                <div className="flex flex-col items-center my-20">
                    {/* <h1 className="text-2xl 2xl:text-4xl font-extrabold">Móviles: Análisis y Novedades</h1>
           */}
                    <h1
                        className={`${fontOswald.className} text-3xl 2xl:text-4xl font-extrabold tracking-wide`}
                    >
                        Tablets
                    </h1>
                    <h2 className="mt-4 tracking-wider max-w-64 text-center">
                        {" "}
                        Análisis y novedades sobre las mejores tablets del mercado en 2024 y más allá.
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
