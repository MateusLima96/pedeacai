import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const HeaderContainer = styled.header`
  padding: 3rem 0;
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoints.lg} {
    padding: 2rem 1rem;
  }

  @media ${breakpoints.md} {
    padding: 2rem 1rem;
  }

  @media ${breakpoints.sm} {
    padding: 2rem 1rem;
  }
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border-radius: 0.375rem;
    padding: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['purple-light']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${mixins.fonts.textS}
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['purple-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }

  @media ${breakpoints.sm} {
    span {
      ${mixins.fonts.textXS}
    }
  }

  @media ${breakpoints.xs} {
    margin-left: 20px;
  }
`

export const MapContainer = styled.div`
  background-color: ${(props) => props.theme.colors['green-light']};
  color: ${(props) => props.theme.colors['green-dark']};

  svg {
    color: ${(props) => props.theme.colors.green};
  }

  span {
    ${mixins.fonts.textS};
  }

  @media ${breakpoints.lg} {
    span {
      ${mixins.fonts.textM}
    }
  }

  @media ${breakpoints.md} {
    span {
      ${mixins.fonts.textM}
    }
  }

  @media ${breakpoints.sm} {
    span {
      ${mixins.fonts.textXS}
    }
  }
`

export const MiniCartContainer = styled.div`
  background: ${(props) => props.theme.colors['purple-light']};

  svg {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`
