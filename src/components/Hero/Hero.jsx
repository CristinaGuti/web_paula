import styled from 'styled-components'
import { H1, HeroParagraph } from '../Text/Text'
import Button from '../Button/Button'
import Paula from '../../assets/image-paula.jpg'


const HeroContainer = styled.div`
height: 600px;
padding-top: 100px;
background-image: url(${Paula});
background-attachment: fixed;
background-size: cover;
background-position: center;
`


const Hero = () => {


    return (
        <HeroContainer>
            <HeroParagraph>¡Hola! Mi nombre es Paula Álvarez y me apasiona el mundo de la sexología y la educación.
                <br />
                He fundado mi propia consulta en la que ofrezco asesoramiento. También disfruto de la
                divulgación sobre educación sexual y feminismo en el podcast "Nos tienen contentas"
                junto a mi compañera Rocío Romero.
            </HeroParagraph>

            <H1>Tu consulta de sexología online</H1>

            <Button link='https://app.acuityscheduling.com/schedule.php?owner=17667345' text='Reserva cita' />

        </HeroContainer>
    )
}

export default Hero
