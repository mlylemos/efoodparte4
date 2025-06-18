import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Dish from '../../components/Dish'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import { LoadingMessage, Banner, BannerText, Container, DishesGrid } from './styles'
import type { Restaurante, Prato } from '../../types'



const Restaurant = () => {
    const { id } = useParams()
    const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedDish, setSelectedDish] = useState<Prato | null>(null)

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((data) => setRestaurante(data))
    }, [id])

    const openModal = (prato: Prato) => {
        setSelectedDish(prato)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedDish(null)
    }

    if (!restaurante) return <LoadingMessage>Carregando...</LoadingMessage>

    return (
        <>
            <Header />
            <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
                <BannerText>
                    <h2>{restaurante.titulo}</h2>
                    <p>{restaurante.descricao}</p>
                </BannerText>
            </Banner>

            <Container>
                <DishesGrid>
                    {restaurante.cardapio.map((prato) => (
                        <Dish
                            key={prato.id}
                            title={prato.nome}
                            description={prato.descricao}
                            image={prato.foto}
                            onClick={() => openModal(prato)}
                        />
                    ))}
                </DishesGrid>
            </Container>

            <Footer />

            {selectedDish && (
                <ProductModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    prato={selectedDish}
                />
            )}
        </>
    )
}

export default Restaurant
