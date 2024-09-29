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

export default function ResumenCategoria({
  titulo,
  linkInterno,
  linkExterno,
  categoria,
  descripcion,
  imagen,
}) {
  return (
    <>
      <div className="flex flex-col justify-center flex flex-column justify-center items-center w-80 mb-5">
        <Link href={linkExterno} className="w-full">
          <img
            src={imagen}
            className="w-3/4 h-60 object-cover object-center m-auto"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <Link href={linkInterno} className={fontJet.className}>
            <p className="text-xs font-bold pt-5 mb-2 inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100">
              {categoria}
            </p>
          </Link>
          <Link href={linkExterno} className={fontOswald.className}>
            <h2 className="text-xl font-extrabold tracking-wide hover:underline text-justify">
              {titulo}
            </h2>
          </Link>
          <hr className="w-20 border-b-[1px] border-b-blue-700 mt-2 mb-5 lg:mt-4 "></hr>
          <Link href={linkExterno}>
            <h3 className="text-lg text-justify">
              {descripcion}
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
