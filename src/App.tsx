import { generateGradients } from './utils'
import { Heading, Container } from './styles'
import Gradient from './Gradient'

const App = () => {
  const gradients = generateGradients()
  return (
    <>
      <Heading>Gradient Generator</Heading>
      <Container>
        {gradients.map((gradient, index) => (
          <Gradient key={index} {...gradient} />
        ))}
      </Container>
    </>
  )
}

export default App
