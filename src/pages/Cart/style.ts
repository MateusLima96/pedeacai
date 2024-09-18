import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;

  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;

  @media ${breakpoints.lg} {
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
  }

  @media ${breakpoints.md} {
    flex-direction: column;
    padding: 30px 15px;
  }

  @media ${breakpoints.sm} {
    flex-direction: column;
    padding: 30px 15px;
  }

  @media (min-width: 380px) and (max-width: 511px) {
    flex-direction: column;
    padding: 20px 15px;
  }

  @media ${breakpoints.xs} {
    flex-direction: column;
    padding: 10px 15px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 640px;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  #order {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media ${breakpoints.md} {
    flex-direction: column;
    padding: 30px 15px;
  }
`

export const FormsContainerBase = styled.div`
  min-width: 640px;
  width: 100%;
  border-radius: 6px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${breakpoints.sm} {
    min-width: 470px;
  }

  @media (min-width: 380px) and (max-width: 511px) {
    min-width: 170px;
  }

  @media ${breakpoints.xs} {
    min-width: 90px;
  }
`

export const AddressContainer = styled(FormsContainerBase)``

export const HeadingBase = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      ${mixins.fonts.textM}
    }

    p {
      color: ${({ theme }) => theme.colors['base-text']};
      ${mixins.fonts.textS}
    }
  }
`

export const AddressHeading = styled(HeadingBase)`
  svg {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-gap: 16px 12px;
  grid-template-areas:
    'cep . .'
    'street street street'
    'houseNumber fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;

  @media ${breakpoints.sm} {
    grid-template-areas:
      'cep . .'
      'street street street'
      'houseNumber fullAddress fullAddress'
      'neighborhood city state';
  }

  @media (min-width: 380px) and (max-width: 511px) {
    grid-gap: 10px 5px;
    grid-template-columns: 110px 99px 60px;
  }

  @media ${breakpoints.xs} {
    grid-gap: 8px 5px;
    grid-template-columns: 80px 88px 60px;
  }
`

export const TextInput = styled.input`
  background: ${({ theme }) => theme.colors['base-input']};
  width: 100%;
  height: 42px;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${mixins.fonts.textS}

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const PaymentContainer = styled(FormsContainerBase)``

export const PaymentHeading = styled(HeadingBase)`
  svg {
    color: ${({ theme }) => theme.colors.green};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 12px;
  }

  @media ${breakpoints.sm} {
    div {
      flex-direction: column;
    }
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
export const CartTotal = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  padding: 2.5rem;
  min-width: 28rem;
  border-radius: 2.25rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 24px 0;
  }

  @media (min-width: 380px) and (max-width: 511px) {
    min-width: 170px;
    padding: 2rem;
  }

  @media ${breakpoints.xs} {
    min-width: 170px;
    padding: 1.5rem;
  }
`
export const Acai = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 105px;
      height: 200px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }

  @media (min-width: 380px) and (max-width: 511px) {
    > div {
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      margin-left: 30px;

      img {
        width: 90px;
        height: 190px;
      }

      div {
        align-items: center;
      }
    }
  }

  @media ${breakpoints.xs} {
    > div {
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      margin-left: 10px;

      img {
        width: 80px;
        height: 180px;
      }

      div {
        align-items: center;
      }
    }
  }
`

export const AcaiInfo = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  > button {
    background-color: ${({ theme }) => theme.colors['base-button']};
    display: flex;
    align-items: center;
    padding: 6px 8px;
    border-radius: 6px;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    svg {
      color: #b64444;
    }

    > span {
      ${mixins.fonts.buttonM}
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS}
    }

    span:last-child {
      ${mixins.fonts.textM}
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL}
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${mixins.fonts.buttonG}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-dark']};
  }

  &[aria-disabled='true'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    pointer-events: none;
  }

  border-radius: 6px;
`
