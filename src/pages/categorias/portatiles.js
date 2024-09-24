import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResumenCategoriaGrande from "@/components/ResumenCategoriaGrande";
import { Lato } from "next/font/google";
import { Oswald } from "next/font/google";

const fontLeto = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontOswald = Oswald({ subsets: ["latin"] });

export default function Tablets() {
    return (
        <>
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
                    <ResumenCategoriaGrande
                        titulo="Los mejores portátiles que puedes comprar en 2024"
                        linkInterno="/categorias/portatiles"
                        linkExterno="/categorias/portatiles/mejoresportatiles2024"
                        categoria="PORTATILES"
                        descripcion="Ya sea para gaming, productividad o edición de contenido, descubre los portátiles que lideran el mercado. Te mostramos lo último de Dell, HP, Apple, y otros para ayudarte a elegir."
                        imagen="https://leasein.co/wp-content/uploads/2024/03/notebook-xps-15-9530-t-black-gallery-5.webp"
                    />
                    <ResumenCategoriaGrande
                        titulo="Qué portátil comprar según tu uso: trabajo, estudio o gaming"
                        linkInterno="/categorias/portatiles"
                        linkExterno="/categorias/portatiles/como-elegir-un-portatil"
                        categoria="PORTÁTILES"
                        descripcion="No todos los portátiles son iguales. Descubre cuál es el más adecuado según tus necesidades: productividad, entretenimiento o gaming. Compara especificaciones y elige el mejor."
                        imagen="https://files.oaiusercontent.com/file-gqmeVYXDEIWUHGRraJ1N5jDG?se=2024-09-24T09%3A34%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da07167b5-35fb-4031-bc7d-6c68e111428b.webp&sig=Bfg040LMg9ggXh65iJMhlna6H3fAw/jZjppeaU6jXwE%3D"
                    />
                    <ResumenCategoriaGrande
                        titulo="Portátiles calidad-precio en 2024: productividad y rendimiento"
                        linkInterno="/categorias/portatiles"
                        linkExterno="/categorias/portatiles/mejores-portatiles-calidad-precio-2024"
                        categoria="PORTÁTILES"
                        descripcion="Encuentra portátiles que ofrecen gran rendimiento a precios accesibles. Desde modelos para estudiantes hasta opciones para trabajar y jugar, todo con una excelente relación calidad-precio."
                        imagen="https://p2-ofp.static.pub//fes/cms/2024/02/08/nehcwbzuupknir3ijlpo02ekhst8aw236332.png"
                    />

                </div>

            </main>
        </>
    );
}
