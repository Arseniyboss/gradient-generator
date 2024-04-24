import { useState, useEffect } from 'react'
import { MdDone, MdOutlineContentCopy } from 'react-icons/md'
import { GradientContainer, Button } from './styles'

const Gradient = (colors: string[]) => {
  const gradient = `linear-gradient(${colors[0]}, ${colors[1]})`
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [isCopied])

  const copyGradient = () => {
    navigator.clipboard.writeText(`background: ${gradient}`)
    setIsCopied(true)
  }
  return (
    <GradientContainer $gradient={gradient}>
      <Button onClick={copyGradient} aria-label='copy gradient'>
        {isCopied ? <MdDone /> : <MdOutlineContentCopy />}
      </Button>
    </GradientContainer>
  )
}

export default Gradient
