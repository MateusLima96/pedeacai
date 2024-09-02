import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem 2rem 10rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
`

export const MiniCartContainer = styled.div`
  background: ${(props) => props.theme.colors['purple-light']};

  svg {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`
