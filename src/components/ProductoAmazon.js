<<<<<<< HEAD
import { JetBrains_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import { Oswald } from "next/font/google";

const fontJet = JetBrains_Mono({ subsets: ["latin"] });

const fontLeto = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontOswald = Oswald({ subsets: ["latin"] });

=======
>>>>>>> 79edc57f63042548b21fdb0001b4845c1417f56d
export default function ProductoAmazon({
    titulo,
    linkAmazon,
    precio,
    descripcion,
    imagen,
}) {
    return (
        <>
            <div className="flex flex-col items-center w-72 m-10">
                <img
                    src={imagen}
                    className="h-48 object-cover object-center max-w-5xl mb-5"
                />
                <div className="flex flex-col">
                    <h2 className="text-xl font-extrabold tracking-wide hover:underline ">
                        {titulo}
                    </h2>
                    <hr className="w-20 border-b-[1px] border-b-blue-700 mt-2 mb-5 lg:mt-4"></hr>
                    <h3 className="text-base mb-5">
                        {descripcion}
                    </h3>
                    <a href={linkAmazon} target="_blank">
                        <button className="text-sm bg-[#FFD814] rounded-lg p-1 px-2 transition-all hover:bg-[#F7CA00] mb-10">
                            Precio en Amazon - <strong>{precio}</strong>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
