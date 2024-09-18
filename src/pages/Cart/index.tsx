import { SubmitHandler, useForm } from 'react-hook-form'
import { Radio } from '../../components/Form/Radio'
import { z } from 'zod'
import {
  Acai,
  AcaiInfo,
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Container,
  ErrorMessage,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
  TextInput,
} from './style'
import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
  Basket,
} from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { acais } from '../../../data.json'
import { useCart } from '../../hooks/useCart'
import { Fragment } from 'react/jsx-runtime'
import { QuantityInput } from '../../components/Form/QuantityInput'

type FormInputs = {
  cep: number
  street: string
  houseNumber: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  houseNumber: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart()

  const acaisInCart = cart.map((item) => {
    const acaiInfo = acais.find((acai) => acai.id === item.id)

    if (!acaiInfo) {
      throw new Error('Nenhum item no carrinho!')
    }

    return {
      ...acaiInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = acaisInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const shippingPrice = 3.5

  const selectedPaymentMethod = watch('paymentMethod')

  function handleIncrementItemQuantity(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleDecrementItemQuantity(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  const handleOrder: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form id="order" onSubmit={handleSubmit(handleOrder)}>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <div style={{ gridArea: 'cep' }}>
                <TextInput
                  placeholder="CEP"
                  type="number"
                  {...register('cep', { valueAsNumber: true })}
                />
                {errors.cep && (
                  <ErrorMessage role="alert">{errors.cep.message}</ErrorMessage>
                )}
              </div>

              <div style={{ gridArea: 'street' }}>
                <TextInput
                  placeholder="Rua"
                  type="text"
                  {...register('street')}
                />
                {errors.street && (
                  <ErrorMessage role="alert">
                    {errors.street.message}
                  </ErrorMessage>
                )}
              </div>

              <div style={{ gridArea: 'houseNumber' }}>
                <TextInput
                  placeholder="Número"
                  type="text"
                  {...register('houseNumber')}
                />
                {errors.houseNumber && (
                  <ErrorMessage role="alert">
                    {errors.houseNumber.message}
                  </ErrorMessage>
                )}
              </div>

              <div style={{ gridArea: 'fullAddress' }}>
                <TextInput
                  placeholder="Complemento"
                  type="text"
                  {...register('fullAddress')}
                />
              </div>

              <div style={{ gridArea: 'neighborhood' }}>
                <TextInput
                  placeholder="Bairro"
                  type="text"
                  {...register('neighborhood')}
                />
                {errors.neighborhood && (
                  <ErrorMessage role="alert">
                    {errors.neighborhood.message}
                  </ErrorMessage>
                )}
              </div>

              <div style={{ gridArea: 'city' }}>
                <TextInput
                  placeholder="Cidade"
                  type="text"
                  {...register('city')}
                />
                {errors.city && (
                  <ErrorMessage role="alert">
                    {errors.city.message}
                  </ErrorMessage>
                )}
              </div>

              <div style={{ gridArea: 'state' }}>
                <TextInput
                  placeholder="UF"
                  type="text"
                  maxLength={2}
                  {...register('state')}
                />
                {errors.state && (
                  <ErrorMessage role="alert">
                    {errors.state.message}
                  </ErrorMessage>
                )}
              </div>
            </AddressForm>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de credito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de Débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
              {errors.paymentMethod ? (
                <ErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </ErrorMessage>
              ) : null}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
      <InfoContainer>
        <h2>Seu Carrinho</h2>
        <CartTotal>
          {acaisInCart ? (
            acaisInCart.map((acai) => (
              <Fragment key={acai.id}>
                <Acai>
                  <div>
                    <img src={acai.image} alt={acai.title} />

                    <div>
                      <span>{acai.title}</span>

                      <AcaiInfo>
                        <QuantityInput
                          quantity={acai.quantity}
                          incrementQuantity={() =>
                            handleIncrementItemQuantity(acai.id)
                          }
                          decrementQuantity={() =>
                            handleDecrementItemQuantity(acai.id)
                          }
                        />
                        <button onClick={() => handleItemRemove(acai.id)}>
                          <Trash />
                          <span>Remover</span>
                        </button>
                      </AcaiInfo>
                    </div>
                  </div>
                  <aside>R$ {(acai.price * acai.quantity).toFixed(2)}</aside>
                </Acai>
                <span />
              </Fragment>
            ))
          ) : (
            <>
              <Basket />
              <span>Você não tem itens no carrinho</span>
            </>
          )}
          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </CartTotalInfo>
          <CheckoutButton
            type="submit"
            form="order"
            aria-disabled={cart.length === 0}
          >
            Confirmar Pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
