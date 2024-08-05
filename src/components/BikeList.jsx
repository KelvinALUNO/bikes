import MeusProdutos from './MeusProdutos.json'
import CardBike from './CardBike.jsx'
import { useEffect, useState } from 'react'
//import Descricao from './Descricao.jsx'
import "./BikeList.css"
export default function BikeList() {
    const bikesOrige = MeusProdutos
    function comprarBike() {
        alert('bike comprada')

    }
    const [bikes, setBikes] = useState(bikesOrige)
    const [filtro, setFiltro] = useState('T')
    useEffect(() => {
        if (filtro === "T") {
            setBikes(bikesOrige)
        } else {
            const bikeFiltered = bikesOrige.filter(bike => bike.categoria === filtro)
            setBikes(bikeFiltered)
        }
    }, [filtro])
    function BntMudar(categoria) {
        setFiltro(categoria)
    }

    return (
        <>
            <div>
                <div>
                    <button className='bnt' onClick={() => BntMudar('T')}>Mostar todos</button>
                    <button className='bnt' onClick={() => BntMudar('Entrada')}>Entrada</button>
                    <button className='bnt' onClick={() => BntMudar('intermediario')}>Intermediário</button>
                    <button className='bnt' onClick={() => BntMudar('Profissional')}>Profissional</button>
                </div>

                <div className='list'>
                    {bikes.map(bike => <CardBike key={bike.id}
                        modelo={bike.nomeModelo}
                        preço={bike.preco}
                        imagemSrc={bike.imgSrc}
                        descricao={bike.descricao}
                        comprarBike={comprarBike} />)}
                </div>
            </div>
        </>
    )

}