import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderContainer,
  Aside,
  MapContainer,
  MiniCartContainer,
} from './styles'
import { Link } from 'react-router-dom'

export function Header() {
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
        <MiniCartContainer>
          <ShoppingCart size={22} weight="fill" />
        </MiniCartContainer>
      </Aside>
    </HeaderContainer>
  )
}
