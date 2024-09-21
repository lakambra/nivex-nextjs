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
      <div className="md:flex md:flex-row md:gap-7">
        <Link href={linkExterno}>
          <img
            src={imagen}
            className="w-80 h-full object-cover object-center md:max-w-5xl "
          />
        </Link>
        <div className="md:flex md:flex-col md:justify-center items-start justify-normal w-3/5">
          <Link href={linkInterno} className={fontJet.className}>
            <p className="text-xs font-bold pt-5 md:mb-2 inline-block relative text-black no-underline transition-all duration-[0.3s] ease-in-out after:content-normal after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100">
              {categoria}
            </p>
          </Link>
          <Link href={linkExterno} className={fontOswald.className}>
            <h2 className="text-xl 2xl:text-3xl font-extrabold tracking-wide hover:underline">
              {titulo}
            </h2>
          </Link>
          <hr className="w-20 border-b-[1px] border-b-blue-700 mt-2 mb-5 lg:mt-4"></hr>
          <h3 className="text-lg">
            <Link href={linkExterno}>{descripcion}</Link>
          </h3>
        </div>
      </div>
    </>
  );
}
