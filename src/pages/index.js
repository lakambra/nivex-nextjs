import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import ResumenCategoria from "@/components/ResumenCategoria";
import { JetBrains_Mono } from "next/font/google";
import Titulo from "@/components/Titulo";

const fontJet = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nivex - Tecnología y móviles, comparativas y análisis</title>
        <link rel="icon" type="image/png" href="/images/1.png" />
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="rDJ6SDzDvNgj_Bq75dweJgoe9o-EWl3cmOhG2NecGNE"
        />
        <meta
          name="description"
          content="Nivex - Tu fuente de información sobre tecnología y móviles, con comparativas y análisis detallados."
        />
      </Head>

      <Header />
      <main className="mt-16">
        <Titulo texto="LO MÁS VISTO" />
        <div className="mt-16 px-5 sm:mx-auto md:items-start md:max-w-7xl flex flex-wrap justify-evenly pb-7">
          <ResumenCategoria
            titulo="Los mejores móviles que puedes comprar en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/mejor-movil-de-2024-test"
            categoria="MÓVILES"
            descripcion="Ya sea un móvil de última generación o una opción más asequible. Te mostramos lo mejor de Apple, Samsung, Google y más. "
            imagen="https://i.blogs.es/7418e8/mi10tpro/1366_2000.webp"
          />
          <ResumenCategoria
            titulo="Las mejores televisiones que puedes comprar en 2024"
            linkInterno="/categorias/televisiones"
            linkExterno="/categorias/televisiones/mejoresTV2024"
            categoria="TELEVISIONES"
            descripcion="Desde pantallas OLED hasta televisores 8K, descubre las mejores opciones para disfrutar de tus series y películas favoritas con la mayor calidad de imagen. Samsung, LG, Sony y otros gigantes de la tecnología te traen lo último."
            imagen="https://images.samsung.com/is/image/samsung/latin_UN55KU6500FXZA_001_Front_black?$624_624_PNG$"
          />
          <ResumenCategoria
            titulo="Las mejores tablets que puedes comprar en 2024"
            linkInterno="/categorias/tablets"
            linkExterno="/categorias/tablets/mejoresTablets2024"
            categoria="TABLETS"
            descripcion="Encuentra la tablet ideal para trabajar o entretenerte. Ya sea una iPad Pro de Apple o una opción potente de Samsung, aquí te mostramos las mejores opciones para cada necesidad."
            imagen="https://cdn.andro4all.com/andro4all/2024/06/huawei-matepad-11-5-s.png"
          />


          <ResumenCategoria
            titulo="Los mejores auriculares/in-ear que puedes comprar en 2024"
            linkInterno="/categorias/auriculares"
            linkExterno="/categorias/auriculares/mejoresAuriculares2024"
            categoria="AURICULARES"
            descripcion="Sumérgete en la música con los auriculares más innovadores del momento. Desde los AirPods de Apple hasta las opciones de Sony y Bose, aquí están los mejores modelos con cancelación de ruido y sonido premium."
            imagen="https://cdn.avpasion.com/wp-content/uploads/2024/09/mejores-auriculares-204-14.webp"
          />

          <ResumenCategoria
            titulo="Los mejores portátiles que puedes comprar en 2024"
            linkInterno="/categorias/portatiles"
            linkExterno="/categorias/portatiles/mejoresportatiles2024"
            categoria="PORTATILES"
            descripcion="Ya sea para gaming, productividad o edición de contenido, descubre los portátiles que lideran el mercado. Te mostramos lo último de Dell, HP, Apple, y otros para ayudarte a elegir."
            imagen="https://leasein.co/wp-content/uploads/2024/03/notebook-xps-15-9530-t-black-gallery-5.webp"
          />

          <ResumenCategoria
            titulo="Los mejores wearables que puedes comprar en 2024"
            linkInterno="/categorias/wearables"
            linkExterno="/categorias/wearables/mejoreswearables2024"
            categoria="WEARABLES"
            descripcion="Mantente conectado con los wearables más avanzados del mercado. Desde los Apple Watch hasta los Galaxy Watch, descubre los dispositivos que mejoran tu salud, fitness y estilo."
            imagen="https://www.wivai.com/on/demandware.static/-/Sites-promocaixa-m-catalog/default/dw4b369b19/deporteyocio/Garmin/121-4004953/GarminEPIX2_FrontA_600x600.png"
          />

        </div>

        <Titulo texto="ULTIMOS LANZAMIENTOS" />
        <div className="mt-16 px-5 sm:mx-auto md:items-start md:max-w-7xl flex flex-wrap justify-evenly pb-7">
          <ResumenCategoria
            titulo="Los nuevos plegables que revolucionan el mercado en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/novedades-2024"
            categoria="MÓVILES"
            descripcion="Descubre los últimos modelos de móviles plegables que combinan innovación y diseño. Desde el Galaxy Z Fold 4 hasta el nuevo Motorola Razr, te mostramos los dispositivos más innovadores del año."
            imagen="https://unaysahbd.com/wp-content/uploads/2024/08/Post_Template_12.webp"
          />

          <ResumenCategoria
            titulo="Nuevas Smart TVs con inteligencia artificial y 8K"
            linkInterno="/categorias/televisiones"
            linkExterno="/categorias/televisiones/nuevas-smart-tv-2024"
            categoria="TELEVISIONES"
            descripcion="Las últimas Smart TVs llegan con inteligencia artificial avanzada y resoluciones 8K impresionantes. Descubre lo último de LG, Sony y Samsung para disfrutar de una experiencia visual inigualable."
            imagen="https://www.ultrontechnology.es/wp-content/uploads/2024/08/dd2697de-136e-4398-93a7-bed6bf10a354.png"
          />

          <ResumenCategoria
            titulo="Los últimos smartwatches para fitness y salud"
            linkInterno="/categorias/wearables"
            linkExterno="/categorias/wearables/nuevos-smartwatches-2024"
            categoria="WEARABLES"
            descripcion="Nuevas generaciones de smartwatches con sensores avanzados para el monitoreo de la salud y el fitness. Apple, Garmin y Fitbit presentan sus últimos modelos con mejoras significativas."
            imagen="https://joyeriacarla.com/wp-content/uploads/2024/04/a34fbf0db158450c6f065f3304d98170a9505a0f-2000x2000-1000.webp"
          />

          <ResumenCategoria
            titulo="Las nuevas tablets ultra potentes de 2024"
            linkInterno="/categorias/tablets"
            linkExterno="/categorias/tablets/nuevas-tablets-2024"
            categoria="TABLETS"
            descripcion="Las últimas tablets llegan con procesadores de alta potencia y pantallas mejoradas para productividad y entretenimiento. Descubre lo nuevo de Apple, Samsung y Lenovo para este año."
            imagen="https://www.yaphone.com/5836-large_default/tablet-samsung-galaxy-tab-s9-fe.jpg"
          />
        </div>
        <Titulo texto="GUIAS RÁPIDAS" />
        <div className="mt-16 px-5 sm:mx-auto md:items-start md:max-w-7xl flex flex-wrap justify-evenly pb-7">
          <ResumenCategoria
            titulo="Cómo elegir el mejor móvil según tu presupuesto"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/como-elegir-el-mejor-movil"
            categoria="MÓVILES"
            descripcion="Descubre cómo seleccionar el móvil ideal ajustado a tu presupuesto. Comparamos opciones de gama baja, media y alta para que encuentres el dispositivo perfecto sin gastar de más."
            imagen="https://files.oaiusercontent.com/file-qH3bfXycc5B5Yq2i8HmYnxE2?se=2024-09-24T09%3A33%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D934cbda9-d588-4833-a86e-f2a8a24af5c1.webp&sig=zs9trxWdCHBECxbRgsXH%2BLSWC1EhvKHjqrv12%2BmdSPI%3D"
          />

          <ResumenCategoria
            titulo="Los 5 factores clave para comprar un buen televisor"
            linkInterno="/categorias/televisiones"
            linkExterno="/categorias/televisiones/como-elegir-un-televisor"
            categoria="TELEVISIONES"
            descripcion="Conoce qué aspectos son esenciales al comprar un televisor: resolución, tamaño, tipo de panel y más. Una guía rápida para encontrar la pantalla ideal para tu hogar."
            imagen="https://files.oaiusercontent.com/file-eGMViOAaxJf4EKugE2lY78ws?se=2024-09-24T09%3A34%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfe4784ef-9ec8-423a-b03b-efcaf2e4f555.webp&sig=NlEPv0nL43/ZH/YSNHNS/zw5x2E4uEwwzreq75XA4lI%3D"
          />

          <ResumenCategoria
            titulo="Qué portátil comprar según tu uso: trabajo, estudio o gaming"
            linkInterno="/categorias/portatiles"
            linkExterno="/categorias/portatiles/como-elegir-un-portatil"
            categoria="PORTÁTILES"
            descripcion="No todos los portátiles son iguales. Descubre cuál es el más adecuado según tus necesidades: productividad, entretenimiento o gaming. Compara especificaciones y elige el mejor."
            imagen="https://files.oaiusercontent.com/file-gqmeVYXDEIWUHGRraJ1N5jDG?se=2024-09-24T09%3A34%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da07167b5-35fb-4031-bc7d-6c68e111428b.webp&sig=Bfg040LMg9ggXh65iJMhlna6H3fAw/jZjppeaU6jXwE%3D"
          />

          <ResumenCategoria
            titulo="Cómo elegir la mejor tablet para estudio y trabajo"
            linkInterno="/categorias/tablets"
            linkExterno="/categorias/tablets/como-elegir-una-tablet"
            categoria="TABLETS"
            descripcion="Encuentra la tablet perfecta para tus tareas diarias, ya sea para tomar apuntes, dibujar o videoconferencias. Comparativa rápida de las mejores opciones para cada caso."
            imagen="https://files.oaiusercontent.com/file-bltzg2jDuWuFkruGMnmHJMRj?se=2024-09-24T09%3A34%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D749fac19-8bd7-4d85-8a82-fac31d0460d4.webp&sig=i1a2pUZLz6A/wUfp7r/MfI/Ezs4ZxtiMhJO8IqnXQsI%3D"
          />

          <ResumenCategoria
            titulo="Guía rápida: Cómo elegir los auriculares perfectos"
            linkInterno="/categorias/auriculares"
            linkExterno="/categorias/auriculares/como-elegir-auriculares"
            categoria="AURICULARES"
            descripcion="Conoce los puntos esenciales para elegir auriculares: tipos (in-ear, over-ear), cancelación de ruido, conectividad y más. Encuentra el modelo que mejor se adapte a tu estilo de vida."
            imagen="https://files.oaiusercontent.com/file-UmoCU97E5s6LUaTrf2ZadoVP?se=2024-09-24T09%3A34%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0102ac2c-4245-453f-9403-150beef1224b.webp&sig=jbGdVZhhbIVw%2BGlJYGYwLFanCtJgmnkq1AGYUqo2AJ4%3D"
          />

          <ResumenCategoria
            titulo="¿Qué smartwatch comprar? Guía rápida de elección"
            linkInterno="/categorias/wearables"
            linkExterno="/categorias/wearables/como-elegir-un-smartwatch"
            categoria="WEARABLES"
            descripcion="Desde monitoreo de salud hasta notificaciones inteligentes, descubre qué smartwatch se adapta mejor a tus necesidades. Compara funcionalidades y precios en esta guía rápida."
            imagen="https://files.oaiusercontent.com/file-EZYh67otO4g2K7oqfNha5xXy?se=2024-09-24T09%3A34%3A40Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D507aa300-8625-43c1-b4ad-a738e51fef1f.webp&sig=kn9HQZT6XKltD9mPpm07ZcMKDmUEuBOMqHxwrjSClKg%3D"
          />

        </div>
        <Titulo texto="CALIDAD-PRECIO" />
        <div className="mt-16 px-5 sm:mx-auto md:items-start md:max-w-7xl flex flex-wrap justify-evenly pb-7">
          <ResumenCategoria
            titulo="Mejores móviles calidad-precio en 2024"
            linkInterno="/categorias/moviles"
            linkExterno="/categorias/moviles/mejores-moviles-calidad-precio-2024"
            categoria="MÓVILES"
            descripcion="Encuentra los móviles con la mejor relación calidad-precio del año. Te mostramos las opciones más equilibradas en rendimiento, cámara y batería sin gastar una fortuna."
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QylVysvzo8zZhpgacsvipNe8EUPZX982FQ&s"
          />

          <ResumenCategoria
            titulo="Las mejores tablets calidad-precio en 2024"
            linkInterno="/categorias/tablets"
            linkExterno="/categorias/tablets/mejores-tablets-calidad-precio-2024"
            categoria="TABLETS"
            descripcion="Conoce las tablets que ofrecen el mejor balance entre precio y prestaciones. Desde modelos económicos para estudiar hasta opciones avanzadas para productividad."
            imagen="https://catalogo.jazztel.com/catalogo/Imagenes/Dispositivos/samsung_galaxy_tab_a9_plus_gris_Frontback2.webp"
          />

          <ResumenCategoria
            titulo="Auriculares calidad-precio que valen la pena en 2024"
            linkInterno="/categorias/auriculares"
            linkExterno="/categorias/auriculares/mejores-auriculares-calidad-precio-2024"
            categoria="AURICULARES"
            descripcion="Descubre los auriculares con la mejor calidad de sonido, comodidad y conectividad sin romper el banco. Te mostramos las mejores opciones en calidad-precio del mercado."
            imagen="https://motorolaes.vtexassets.com/arquivos/ids/159612/motorola-buds-plus-pdp-render-Darkest-Spruce-1-63ofig7c.png?v=638488208701800000"
          />

          <ResumenCategoria
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
