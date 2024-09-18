import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  padding: 80px 20px;
  justify-content: space-between;
  gap: 40px;

  img {
    margin-bottom: -13px;
  }

  @media ${breakpoints.lg} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${breakpoints.sm} {
    img {
      max-width: 400px;
    }
  }

  @media ${breakpoints.sm} {
    img {
      max-width: 300px;
    }
  }
`

export const Heading = styled.div`
  h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['purple-dark']};
  }

  p {
    ${mixins.fonts.textL}
  }
`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  margin-top: 40px;

  gap: 32px;
  width: 100%;
  border-radius: 6px 36px;
  border: 1px solid;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.green}, ${theme.colors.purple})`};
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  border-radius: 6px 36px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`
