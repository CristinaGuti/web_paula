import styled from 'styled-components'


const Hero = () => {

    // const ReservationButton = styled.button`
    // background-color: var(--color-red);
    // border-radius: 5px;
    // color: black;
    // padding: 10px 30px;
    // margin-top: 30px;
    // &:hover,
    // &:focus {
    // background-color: var(--color-podcast);
    // }
    // `

    const Hero = styled.div`
    height: 500px;
    padding-top: 100px;
    background-color: var(--color-blue);
    `

    const Title = styled.h1`
    font-weight: 600;
    letter-spacing: 3px;
    margin: 20px 0 60px 0;
    font-family: "Gobold-Regular";
    `
    const Link = styled.a`
    text-decoration: none;
      background-color: var(--color-red);
    border-radius: 5px;
    color: black;
    padding: 15px 35px;
    &:hover,
    &:focus {
    background-color: var(--color-podcast);
    }
    `


    return (
        <Hero>
            <Title>TU CONSULTA DE SEXOLOGÍA ONLINE</Title>

            <Link href='https://app.acuityscheduling.com/schedule.php?owner=17667345' target="_blank">RESERVA CITA</Link>

        </Hero>
    )
}

export default Hero