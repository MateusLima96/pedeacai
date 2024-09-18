import styled from 'styled-components'

export const QuantiyInputContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 8px;
  gap: 8px;
  border-radius: 6px;
  width: 72px;
  height: 38px;

  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${(props) => props.theme.colors.green};
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors['green-dark']};
    }
  }

  span {
    color: ${(props) => props.theme.colors['base-title']};
    padding-top: 2px;
  }
`
