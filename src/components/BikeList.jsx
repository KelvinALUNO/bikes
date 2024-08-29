import CardBike from './CardBike.jsx'
import { useState } from 'react'
import "./BikeList.css"
import { produtos } from './MeusProdutos.js'


export default function BikeList() {
    function comprarBike() {
        alert('bike comprada')
        
    }
    //const [bikes, setBikes] = useState(produtos)
    const [filtro, setFiltro] = useState('T')
    
    const bikes = filtro=='T' ? getProdutosIniciais(produtos) : produtos.filter(bike => bike.categoria === filtro)
    //console.log({produtos})
   
    // useEffect(() => {
    //     if (filtro === "T") {
    //         setBikes(produtos)
    //     } else {
    //         const bikeFiltered = produtos.filter(bike => bike.categoria === filtro)
    //         setBikes(bikeFiltered)
    //     }
    // }, [filtro])
    

    return (
        <>
            <div>
                <div>
                    {filtro}
                    <button className='bnt' onClick={() => setFiltro('T')}>Mostar todos</button>
                    <button className='bnt' onClick={() => setFiltro('Entrada')}>Entrada</button>
                    <button className='bnt' onClick={() => setFiltro('intermediario')}>Intermediário</button>
                    <button className='bnt' onClick={() => setFiltro('Profissional')}>Profissional</button>
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

function getProdutosIniciais(produtos) {
    const categorias = []
    const mostrar = []

    produtos.forEach(p=>{
        if(!categorias.includes(p.categoria)) {
            mostrar.push(p)
            categorias.push(p.categoria)
        }
    })

    return mostrar

}