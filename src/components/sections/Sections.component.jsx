import { Fade } from "react-reveal";

import {
  Wrap, SectionText, Buttons, ButtonGroup,
  LeftButton, RightButton, DownArrow
} from "./sections.styles";

const Section = ({ title, description, leftButton, rightButton, image }) => {
  return (
    <Wrap image={image} id={title}>
      <Fade>
        <SectionText>
          <h1>{title}</h1>
          <p>{description}</p>
        </SectionText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftButton}
            </LeftButton>

            {
              rightButton && (
                <RightButton>
                  {rightButton}
                </RightButton>
              )
            }
          </ButtonGroup>
        </Fade>

        <DownArrow src='/tesla-images/down-arrow.svg' alt="down arrow" />
      </Buttons>
    </Wrap>
  )
}

export default Section