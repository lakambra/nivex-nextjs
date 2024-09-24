import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import { Oswald } from "next/font/google";

const fontJet = JetBrains_Mono({ subsets: ["latin"] });

const fontLeto = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
const fontOswald = Oswald({ subsets: ["latin"] });

export default function Titulo({
    texto
}) {
    return (
        <>
            <div
                className={`${fontJet.className} flex justify-center border-b-2 border-t-2 border-gray-100 py-4 mx-5 tracking-wide font-bold`}
            >
                {texto}
            </div>
        </>
    );
}
