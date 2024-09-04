import styled from 'styled-components'
import background from '../../../public/images/background.png'
import { mixins } from '../../styles/mixins'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) center;
  background-size: cover;

  #hero-content {
    display: flex;
    flex-direction: row;
    padding: 6.75rem 0;
    max-width: 1120px;
  }
`

export const Heading = styled.div`
  h1 {
    ${mixins.fonts.titleXL};
  }

  p {
    ${mixins.fonts.textL}
    margin-top: 1rem;
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
