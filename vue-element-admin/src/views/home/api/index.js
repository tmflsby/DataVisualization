import service from '../utils/request'

export const wordCloud = () => service({
  url: '/screen/wordcloud',
  method: 'get'
})

export const mapScatter = () => service({
  url: '/screen/map/scatter',
  method: 'get'
})

export const screenData = () => service({
  url: '/screen/data',
  method: 'get'
})
