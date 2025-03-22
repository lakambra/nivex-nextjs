<<<<<<< HEAD
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import MovilDetallado from "@/components/MovilDetallado";
import { JetBrains_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";
import ProductoAmazon from "@/components/ProductoAmazon";

const fontLato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontJet = JetBrains_Mono({ subsets: ["latin"] });
const fontOswald = Oswald({ subsets: ["latin"] });

=======
import ProductoAmazon from "@/components/ProductoAmazon";

>>>>>>> 79edc57f63042548b21fdb0001b4845c1417f56d
export default function SubSeccion({
    titulo,
    descripcion,
    jsonn,
}) {
    return (
        <>
            <h3 className="my-10 font-bold">{titulo}</h3>
            <p>
                {descripcion}
            </p>
            <div className="flex flex-wrap justify-evenly my-10">

                {

                    jsonn.map((categoria, index) => (
                        <ProductoAmazon
                            key={index}
                            titulo={categoria.titulo}
                            linkAmazon={categoria.linkAmazon}
                            precio={categoria.precio}
                            descripcion={categoria.descripcion}
                            imagen={categoria.imagen}
                        />

                    ))}
            </div>
        </>
    );
}
