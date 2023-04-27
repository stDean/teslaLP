import { Container } from "./main.styles";
import { useCarContext } from "../../context/useCar";
import { Section } from "../../components";

const Main = () => {

  const { cars } = useCarContext();

  return (
    <Container>
      {
        cars.map(({ id, ...otherProps }) => (
          <Section
            key={id}
            {...otherProps}
            leftButton='custom order'
            rightButton='existing inventory'
          />
        ))
      }

      <Section
        title='Low Cost Solar Panel.'
        description='Money-back Gauranteed.'
        leftButton='order now'
        rightButton='learn more'
        image='solar-panel.jpg'
      />

      <Section
        title='Solar for New Roof'
        description='Solar Roofs Costs Less Than a New Roof Plus Solar Panels'
        leftButton='custom order'
        rightButton='existing inventory'
        image='solar-roof.jpg'
      />

      <Section
        title='Accessories'
        leftButton='shop now'
        image='accessories.jpg'
      />
    </Container>
  )
}

export default Main