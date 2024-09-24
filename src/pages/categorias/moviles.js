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

export default function Moviles() {
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
            Móviles
          </h1>
          <h2 className="mt-4 tracking-wider max-w-64 text-center">
            {" "}
            Análisis y novedades sobre los mejores móviles del mercado en 2024 y
            más allá
          </h2>
        </div>
        <div className="overflow-x-hidden px-5 mb-5 md:max-w-6xl mx-auto">
          <ResumenCategoriaGrande
            titulo="Los mejores móviles que puedes comprar en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/mejor-movil-de-2024-test"
            categoria="MÓVILES"
            descripcion="Ya sea un móvil de última generación o una opción más asequible. Te mostramos lo mejor de Apple, Samsung, Google y más. "
            imagen="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
          />

          <ResumenCategoriaGrande
            titulo="Los nuevos plegables que revolucionan el mercado en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/novedades-2024"
            categoria="MÓVILES"
            descripcion="Descubre los últimos modelos de móviles plegables que combinan innovación y diseño. Desde el Galaxy Z Fold 4 hasta el nuevo Motorola Razr, te mostramos los dispositivos más innovadores del año."
            imagen="https://unaysahbd.com/wp-content/uploads/2024/08/Post_Template_12.webp"
          />
          <ResumenCategoriaGrande
            titulo="Cómo elegir el mejor móvil según tu presupuesto"
            linkInterno="/guias/moviles"
            linkExterno="/guias/moviles/como-elegir-el-mejor-movil"
            categoria="MÓVILES"
            descripcion="Descubre cómo seleccionar el móvil ideal ajustado a tu presupuesto. Comparamos opciones de gama baja, media y alta para que encuentres el dispositivo perfecto sin gastar de más."
            imagen="https://files.oaiusercontent.com/file-qH3bfXycc5B5Yq2i8HmYnxE2?se=2024-09-24T09%3A33%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D934cbda9-d588-4833-a86e-f2a8a24af5c1.webp&sig=zs9trxWdCHBECxbRgsXH%2BLSWC1EhvKHjqrv12%2BmdSPI%3D"
          />
          <ResumenCategoriaGrande
            titulo="Mejores móviles calidad-precio en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/mejores-moviles-calidad-precio-2024"
            categoria="MÓVILES"
            descripcion="Encuentra los móviles con la mejor relación calidad-precio del año. Te mostramos las opciones más equilibradas en rendimiento, cámara y batería sin gastar una fortuna."
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QylVysvzo8zZhpgacsvipNe8EUPZX982FQ&s"
          />
        </div>
      </main>
    </>
  );
}
