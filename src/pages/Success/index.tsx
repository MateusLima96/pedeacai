import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, Heading, InfoContainer, InfoContent, Order } from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o açaí chegará até você</p>
        </Heading>
        <InfoContainer>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.green }}
                size={32}
                weight="fill"
              />

              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.houseNumber}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
                weight="fill"
              />
              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </InfoContainer>
      </Order>
      <img src="/images/delivery.svg" alt="" />
    </Container>
  )
}
