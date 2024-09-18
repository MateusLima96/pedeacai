import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer, Aside, MapContainer } from './styles'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="./logo.svg" alt="" />
      </Link>
      <Aside>
        <MapContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </MapContainer>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
