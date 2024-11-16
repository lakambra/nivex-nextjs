import ProductoAmazon from "@/components/ProductoAmazon";

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
