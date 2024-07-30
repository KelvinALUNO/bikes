import './CardBike.css'
export default function CardBike({modelo, preço, imagemSrc, descricao, comprarBike}) {
    return (
        <>
            <div className="cardBike">
                <img src={imagemSrc} alt="Imagem da Bike" />
                <h4 className='modelo'>{modelo}<h5>{descricao}</h5></h4>
                <h6 className='preço'>{preço}</h6>
                <button onClick={() => comprarBike(modelo)} className='bntComprar'>Comprar</button>
            </div>
        </>
    )
}