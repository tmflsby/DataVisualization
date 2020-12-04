import service from '@/utils/request'

const icode = 'C2CE489D152F6DD7'

export const wordCloud = () => service({
  url: '/screen/wordcloud',
  method: 'get',
  params: { icode }
})

export const mapScatter = () => service({
  url: '/screen/map/scatter',
  method: 'get',
  params: { icode }
})

export const screenData = () => service({
  url: '/screen/data',
  method: 'get',
  params: { icode }
})
