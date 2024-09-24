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
                        Auriculares
                    </h1>
                    <h2 className="mt-4 tracking-wider max-w-64 text-center">
                        {" "}
                        Análisis y novedades sobre los mejores auriculares del mercado en 2024 y más allá.
                    </h2>
                </div>
                <div className="overflow-x-hidden px-5 mb-5 md:max-w-6xl mx-auto">
                    <ResumenCategoriaGrande
                        titulo="Auriculares calidad-precio que valen la pena en 2024"
                        linkInterno="/categorias/auriculares"
                        linkExterno="/categorias/auriculares/mejores-auriculares-calidad-precio-2024"
                        categoria="AURICULARES"
                        descripcion="Descubre los auriculares con la mejor calidad de sonido, comodidad y conectividad sin romper el banco. Te mostramos las mejores opciones en calidad-precio del mercado."
                        imagen="https://motorolaes.vtexassets.com/arquivos/ids/159612/motorola-buds-plus-pdp-render-Darkest-Spruce-1-63ofig7c.png?v=638488208701800000"
                    />
                    <ResumenCategoriaGrande
                        titulo="Los mejores auriculares/in-ear que puedes comprar en 2024"
                        linkInterno="/categorias/auriculares"
                        linkExterno="/categorias/auriculares/mejoresAuriculares2024"
                        categoria="AURICULARES"
                        descripcion="Sumérgete en la música con los auriculares más innovadores del momento. Desde los AirPods de Apple hasta las opciones de Sony y Bose, aquí están los mejores modelos con cancelación de ruido y sonido premium."
                        imagen="https://cdn.avpasion.com/wp-content/uploads/2024/09/mejores-auriculares-204-14.webp"
                    />
                    <ResumenCategoriaGrande
                        titulo="Guía rápida: Cómo elegir los auriculares perfectos"
                        linkInterno="/categorias/auriculares"
                        linkExterno="/categorias/auriculares/como-elegir-auriculares"
                        categoria="AURICULARES"
                        descripcion="Conoce los puntos esenciales para elegir auriculares: tipos (in-ear, over-ear), cancelación de ruido, conectividad y más. Encuentra el modelo que mejor se adapte a tu estilo de vida."
                        imagen="https://files.oaiusercontent.com/file-UmoCU97E5s6LUaTrf2ZadoVP?se=2024-09-24T09%3A34%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0102ac2c-4245-453f-9403-150beef1224b.webp&sig=jbGdVZhhbIVw%2BGlJYGYwLFanCtJgmnkq1AGYUqo2AJ4%3D"
                    />

                </div>

            </main>
        </>
    );
}
