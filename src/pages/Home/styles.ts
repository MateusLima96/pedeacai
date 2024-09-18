import styled from 'styled-components'

import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./images/background.png') center;
  background-size: cover;

  #hero-content {
    display: flex;
    flex-direction: row;
    padding: 6.75rem 0;
    width: 100%;
    max-width: 70rem;
  }

  @media ${breakpoints.lg} {
    #hero-content {
      flex-direction: column;
      padding: 2rem 1rem;

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      img {
        width: 700px;
        align-self: center;
      }
    }
  }

  @media ${breakpoints.md} {
    #hero-content {
      flex-direction: column;
      padding: 2rem 1rem;

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      img {
        width: 500px;
        align-self: center;
      }
    }
  }

  @media ${breakpoints.sm} {
    #hero-content {
      flex-direction: column;
      padding: 2rem 1rem;

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      img {
        width: 300px;
        align-self: center;
      }
    }
  }

  @media ${breakpoints.xs} {
    background: none;

    #hero-content {
      flex-direction: column;
      flex-wrap: wrap;

      padding: 1rem 1rem;

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      img {
        width: 200px;
        align-self: center;
      }
    }
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

  @media ${breakpoints.sm} {
    h1 {
      ${mixins.fonts.titleL}
    }

    p {
      ${mixins.fonts.textM}
    }
  }

  @media ${breakpoints.xs} {
    h1 {
      ${mixins.fonts.titleM}
    }

    p {
      ${mixins.fonts.textXS}
    }
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

  @media ${breakpoints.sm} {
    ${mixins.fonts.textXS}
  }

  @media ${breakpoints.xs} {
    background: none;
    svg {
      padding: 0.5rem;
    }

    > div div {
      gap: 15px;
      align-items: flex-start;
      flex-direction: column;
    }

    ${mixins.fonts.textXS}
  }
`

export const AcaisList = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 1rem 0;
  max-width: 1120px;
  gap: 54px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 20px;
  }

  h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  @media ${breakpoints.lg} {
    padding: 2rem 1rem;

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media ${breakpoints.md} {
    padding: 2rem 1rem;

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media ${breakpoints.sm} {
    padding: 2rem 1rem;

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media ${breakpoints.xs} {
    padding: 2rem 1rem;

    > div {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`

export const HomeContainer = styled.div``
