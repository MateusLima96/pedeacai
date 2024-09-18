import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '../Form/QuantityInput'

import {
  CardContainer,
  CardDescription,
  CardImage,
  Control,
  Order,
  Price,
  Title,
} from './styles'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'

interface Props {
  acai: {
    id: string
    title: string
    description: string
    price: number
    image: string
  }
}

export function Card({ acai }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: acai.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CardContainer>
      <CardImage src={acai.image} alt="" />
      <Title>{acai.title}</Title>
      <CardDescription>{acai.description}</CardDescription>
      <Control>
        <Price>
          <span>R$</span>
          <span>{acai.price.toFixed(2)}</span>
        </Price>
        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart
                size={22}
                color={theme.colors['base-card']}
                weight="fill"
              />
            )}
          </button>
        </Order>
      </Control>
    </CardContainer>
  )
}
