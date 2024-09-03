import styled from 'styled-components'
import background from '../../../public/images/background.png'
import { mixins } from '../../styles/mixins'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 10rem;
  background: url(${background});
  background-size: contain;
`

export const Heading = styled.div`
  h1 {
    ${mixins.fonts.titleXL};
  }

  p {
    ${mixins.fonts.textL}
  }
`

export const InfoHero = styled.div`
  display: flex;
  align-items: center;

  margin-top: 3.875rem;

  svg {
    border-radius: 100%;
    padding: 0.5rem;
  }

  ${mixins.fonts.textM}
  gap: 2.5rem;

  span {
    padding-left: 0.75rem;
  }
`
