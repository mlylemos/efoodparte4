import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Dish from '../../components/Dish'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import { LoadingMessage, Container, DishesGrid } from './styles'
import type { Restaurante, Prato } from '../../types'
import RestaurantBanner from '../../components/RestaurantBanner'


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
            <RestaurantBanner
                image={restaurante.capa}
                name={restaurante.titulo}
                cuisine={restaurante.tipo}
            />

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