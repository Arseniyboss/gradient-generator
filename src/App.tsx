import { generateGradients } from './utils'
import { Container } from './styles'
import Gradient from './Gradient'

const App = () => {
  const gradients = generateGradients()
  return (
    <Container>
      {gradients.map((gradient, index) => (
        <Gradient key={index} {...gradient} />
      ))}
    </Container>
  )
}

export default App
