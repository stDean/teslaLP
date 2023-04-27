import { Container } from "./main.styles";
import { useCarContext } from "../../context/useCar";
import { Sections } from "../../components";

const Main = () => {

  const { cars } = useCarContext();

  return (
    <Container>
      {
        cars.map(car => <h1 key={car.id}>{car.title}</h1>)
      }
    </Container>
  )
}

export default Main