import { useTheme } from 'styled-components'
import { Heading, HeroContainer, InfoHero } from './styles'
import { ShoppingCart, Package, Timer, Cherries } from '@phosphor-icons/react'

export function Home() {
  const theme = useTheme()

  return (
    <HeroContainer>
      <div id="hero-content">
        <Heading>
          <h1>Transforme Seu dia com o Pede Açai Delivery!</h1>
          <p>
            Com a nossa entrega expressa, o seu açaí chega na temperatura
            perfeita, pronto para ser apreciado.
          </p>
          <InfoHero>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors['purple-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}
              >
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors['green-dark'] }}
                />
                <span>Embalagem mantém temperatura</span>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}
              >
                <Cherries
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.green }}
                />
                <span>O açaí chega geladinho até você</span>
              </div>
            </div>
          </InfoHero>
        </Heading>
        <img src="./images/hero.svg" alt="" />
      </div>
    </HeroContainer>
  )
}
