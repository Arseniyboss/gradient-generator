import styled from 'styled-components'

type GradientProps = {
  $gradient: string
}

export const Container = styled.div`
  --spacing: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing);
  padding: var(--spacing);
`

export const GradientContainer = styled.div<GradientProps>`
  background: ${({ $gradient }) => $gradient};
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem darkgrey;
  position: relative;
  aspect-ratio: 1;
`

export const Button = styled.button`
  --spacing: 5px;
  border: none;
  background: none;
  color: white;
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
  font-size: 1.3rem;
  cursor: pointer;
`
