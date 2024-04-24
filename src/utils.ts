const generateColor = () => {
  return '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
}

export const generateGradients = () => {
  return [...new Array(60)].map(() => [generateColor(), generateColor()])
}
