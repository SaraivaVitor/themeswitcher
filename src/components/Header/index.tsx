import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { Container } from './styles'

import { FaLightbulb } from 'react-icons/fa'

interface Props{
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) =>{

    const { title } = useContext(ThemeContext)

    return(
        <Container>
            Hello World
            <div>
                <span ><FaLightbulb /></span>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor="#eeebd3"
                    onColor="#174241"
                />
            </div>
        </Container>
    )
}

export default Header