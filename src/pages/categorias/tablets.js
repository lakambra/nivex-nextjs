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
                        Tablets
                    </h1>
                    <h2 className="mt-4 tracking-wider max-w-64 text-center">
                        {" "}
                        Análisis y novedades sobre las mejores tablets del mercado en 2024 y más allá.
                    </h2>
                </div>
                <div className="overflow-x-hidden px-5 mb-5 md:max-w-6xl mx-auto">
                    <ResumenCategoriaGrande
                        titulo="Cómo elegir la mejor tablet para estudio y trabajo"
                        linkInterno="/guias/tablets"
                        linkExterno="/guias/tablets/como-elegir-una-tablet"
                        categoria="TABLETS"
                        descripcion="Encuentra la tablet perfecta para tus tareas diarias, ya sea para tomar apuntes, dibujar o videoconferencias. Comparativa rápida de las mejores opciones para cada caso."
                        imagen="https://files.oaiusercontent.com/file-bltzg2jDuWuFkruGMnmHJMRj?se=2024-09-24T09%3A34%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D749fac19-8bd7-4d85-8a82-fac31d0460d4.webp&sig=i1a2pUZLz6A/wUfp7r/MfI/Ezs4ZxtiMhJO8IqnXQsI%3D"
                    />
                    <ResumenCategoriaGrande
                        titulo="Las mejores tablets que puedes comprar en 2024"
                        linkInterno="/categorias/tablets"
                        linkExterno="/categorias/tablets/mejoresTablets2024"
                        categoria="TABLETS"
                        descripcion="Encuentra la tablet ideal para trabajar o entretenerte. Ya sea una iPad Pro de Apple o una opción potente de Samsung, aquí te mostramos las mejores opciones para cada necesidad."
                        imagen="https://cdn.andro4all.com/andro4all/2024/06/huawei-matepad-11-5-s.png"
                    />
                    <ResumenCategoriaGrande
                        titulo="Las nuevas tablets ultra potentes de 2024"
                        linkInterno="/categorias/tablets"
                        linkExterno="/categorias/tablets/nuevas-tablets-2024"
                        categoria="TABLETS"
                        descripcion="Las últimas tablets llegan con procesadores de alta potencia y pantallas mejoradas para productividad y entretenimiento. Descubre lo nuevo de Apple, Samsung y Lenovo para este año."
                        imagen="https://www.yaphone.com/5836-large_default/tablet-samsung-galaxy-tab-s9-fe.jpg"
                    />
                    <ResumenCategoriaGrande
                        titulo="Las mejores tablets calidad-precio en 2024"
                        linkInterno="/categorias/tablets"
                        linkExterno="/categorias/tablets/mejores-tablets-calidad-precio-2024"
                        categoria="TABLETS"
                        descripcion="Conoce las tablets que ofrecen el mejor balance entre precio y prestaciones. Desde modelos económicos para estudiar hasta opciones avanzadas para productividad."
                        imagen="https://catalogo.jazztel.com/catalogo/Imagenes/Dispositivos/samsung_galaxy_tab_a9_plus_gris_Frontback2.webp"
                    />

                </div>

            </main>
        </>
    );
}
