import { Fade } from "react-reveal";

import {
  Wrap, SectionText, Buttons, ButtonGroup,
  LeftButton, RightButton, DownArrow
} from "./sections.styles";

const Sections = ({ title, description, leftButton, rightButton }) => {
  return (
    <Wrap>
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
              rightButton & (
                <RightButton>
                  {rightButton}
                </RightButton>
              )
            }
          </ButtonGroup>
        </Fade>
      </Buttons>

      <DownArrow src='/tesla-images/down-arrow.svg' alt="down arrow" />
    </Wrap>
  )
}

export default Sections