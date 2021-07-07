import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  text-align: center;
  background: #fff;
  font-family: 'Amatic SC', cursive;
`

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.4em;
  margin: 10px auto;
  color: #ce93d8;
  font-family: 'Amatic SC', cursive;
  font-weight: bold;
  vertical-align: middle;

  @media only screen and (max-width: 400px) {
    font-size: 2em;
    line-height: 2em;
  }
`

export const Header: FC = () => {
  return (
    <Wrapper>
      <Heading>variables.titulek</Heading>
    </Wrapper>
  )
}
