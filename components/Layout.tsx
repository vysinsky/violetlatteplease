import { FC } from 'react'
import { Header } from './Header'
import { Navigation } from './Navigation'
import styled from 'styled-components'
import { HeroImage } from './HeroImage'

const HeaderContainer = styled.div`
  margin: auto;
`

const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  margin: 0 auto;
`

const Sidebar = styled.aside`
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 700px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
    padding: 20px;
    opacity: 0;
    transform: translateX(-100%);
  }
`

const ContentContainer = styled.main`
  width: 100%;
  padding: 0 20px 0 20px;

  @media only screen and (max-width: 700px) {
    padding: 0;
  }
`

interface Props {
  displayHero?: boolean
}

export const Layout: FC<Props> = ({ children, displayHero = true }) => {
  return (
    <>
      <HeaderContainer>
        {displayHero && <HeroImage />}
        <Header />
      </HeaderContainer>
      <Wrapper>
        <Sidebar>
          <Navigation />
        </Sidebar>
        <ContentContainer>{children}</ContentContainer>
      </Wrapper>
    </>
  )
}
