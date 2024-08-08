//import MeusProdutos from './MeusProdutos.json'
import CardBike from './CardBike.jsx'
import { useEffect, useState } from 'react'
//import Descricao from './Descricao.jsx'
import "./BikeList.css"
function Coisa() {
    return <div>oi</div>
}

export default function BikeList() {
    const bikesOrige = [
        {
            "descricao":<Coisa />,
            "id": 1,
            "nomeModelo": "Primary",
            "preco": "R$ 200",
            "categoria": "Entrada",
            "imgSrc": "https:origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"
        },
        {
            "id": 2,
            "nomeModelo": "Primary 2",
            "preco": "R$ 280",
            "categoria": "Entrada",
            "imgSrc": "https:origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"
        },
        {
            "id": 3,
            "nomeModelo": "Primary 3",
            "preco": "R$ 360",
            "categoria": "Entrada",
            "imgSrc": "https:origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"
        },
        {
            "id": 1,
            "nomeModelo": "Sport",
            "preco": "R$ 600",
            "categoria": "intermediario",
            "imgSrc": "https://origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"
        },
        {
            "id": 2,
            "nomeModelo": "Sport Casual",
            "preco": "R$ 700",
            "categoria": "intermediario",
            "imgSrc": "https://origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"
        },
        {
            "id": 3,
            "nomeModelo": "Sport Enthusiastic",
            "preco": "R$ 1.200",
            "categoria": "intermediario",
            "imgSrc": "https://origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"
        },
        {
            "id": 1,
            "nomeModelo": "Super Speed",
            "preco": "R$ 1.500",
            "categoria": "Profissional",
            "imgSrc": "https://origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg"
        },
        {
            "id": 2,
            "nomeModelo": "Super Speed Pro",
            "preco": "R$ 2.200",
            "categoria": "Profissional",
            "imgSrc": "https://origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg"
        },
        {
            "id": 3,
            "nomeModelo": "Super Speed Deluxe",
            "preco": "R$ 3.500",
            "categoria": "Profissional",
            "imgSrc": "https://origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg'"
        }
    ]
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