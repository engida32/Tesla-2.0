import React from 'react'
import Fade from 'react-reveal'
import Pulse from 'react-reveal/Pulse'
import {Wrap,ItemText,Buttons,ButtonGroup,LeftButton,RightButton,DownArrow} from '../style/section_style'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Pulse >
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1> {title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>}

                </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
        </Pulse>
    )
}

export default Section
