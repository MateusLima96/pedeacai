import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const RadioContainer = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM}
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['green-light']};
    border: 1px solid ${({ theme }) => theme.colors.green};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.green};
  }
`
