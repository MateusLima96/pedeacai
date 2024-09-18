import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 10px 20px 20px;
  border-radius: 2.25rem;

  display: flex;
  flex-direction: column;

  text-align: center;

  @media ${breakpoints.lg} {
    padding: 5px 20px 10px;
  }

  @media ${breakpoints.md} {
    padding: 5px 25px 10px;
  }

  @media ${breakpoints.sm} {
    padding: 5px 10px 10px;
  }
`

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  margin-top: 0.5rem;
  align-self: center;

  @media ${breakpoints.sm} {
    ${mixins.fonts.titleXS}
  }
`

export const CardImage = styled.img`
  max-width: 160px;
  max-height: 160px;
  align-self: center;

  @media ${breakpoints.sm} {
    max-width: 110px;
    max-height: 110px;
  }
`
export const CardDescription = styled.span`
  ${mixins.fonts.textS}
  align-self: center;

  @media ${breakpoints.sm} {
    ${mixins.fonts.textXS}
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  @media ${breakpoints.sm} {
    margin-top: 10px;
    flex-direction: column;
    gap: 2px;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM}
    color: ${({ theme }) => theme.colors['base-text']};
  }

  @media ${breakpoints.sm} {
    span:first-child {
      ${mixins.fonts.textM}
      color: ${({ theme }) => theme.colors['base-text']};
    }

    span:last-child {
      ${mixins.fonts.titleS}
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const Order = styled.div<{ $itemAdded: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['green-dark'] : theme.colors['purple-dark']};

    border-radius: 0.375rem;
    padding: 0.5rem;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.green : theme.colors.purple};
    }
  }
`
