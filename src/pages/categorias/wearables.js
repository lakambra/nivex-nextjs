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
                        Wearables
                    </h1>
                    <h2 className="mt-4 tracking-wider max-w-64 text-center">
                        {" "}
                        Análisis y novedades sobre los mejores wearables del mercado en 2024 y más allá.
                    </h2>
                </div>
                <div className="overflow-x-hidden px-5 mb-5 md:max-w-6xl mx-auto">
                    <ResumenCategoriaGrande
                        titulo="Los mejores wearables que puedes comprar en 2024"
                        linkInterno="/categorias/wearables"
                        linkExterno="/categorias/wearables/mejoreswearables2024"
                        categoria="WEARABLES"
                        descripcion="Mantente conectado con los wearables más avanzados del mercado. Desde los Apple Watch hasta los Galaxy Watch, descubre los dispositivos que mejoran tu salud, fitness y estilo."
                        imagen="https://www.wivai.com/on/demandware.static/-/Sites-promocaixa-m-catalog/default/dw4b369b19/deporteyocio/Garmin/121-4004953/GarminEPIX2_FrontA_600x600.png"
                    />
                    <ResumenCategoriaGrande
                        titulo="Los últimos smartwatches para fitness y salud"
                        linkInterno="/categorias/wearables"
                        linkExterno="/categorias/wearables/nuevos-smartwatches-2024"
                        categoria="WEARABLES"
                        descripcion="Nuevas generaciones de smartwatches con sensores avanzados para el monitoreo de la salud y el fitness. Apple, Garmin y Fitbit presentan sus últimos modelos con mejoras significativas."
                        imagen="https://joyeriacarla.com/wp-content/uploads/2024/04/a34fbf0db158450c6f065f3304d98170a9505a0f-2000x2000-1000.webp"
                    />
                    <ResumenCategoriaGrande
                        titulo="¿Qué smartwatch comprar? Guía rápida de elección"
                        linkInterno="/categorias/wearables"
                        linkExterno="/categorias/wearables/como-elegir-un-smartwatch"
                        categoria="WEARABLES"
                        descripcion="Desde monitoreo de salud hasta notificaciones inteligentes, descubre qué smartwatch se adapta mejor a tus necesidades. Compara funcionalidades y precios en esta guía rápida."
                        imagen="https://files.oaiusercontent.com/file-EZYh67otO4g2K7oqfNha5xXy?se=2024-09-24T09%3A34%3A40Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D507aa300-8625-43c1-b4ad-a738e51fef1f.webp&sig=kn9HQZT6XKltD9mPpm07ZcMKDmUEuBOMqHxwrjSClKg%3D"
                    />

                </div>

            </main>
        </>
    );
}
