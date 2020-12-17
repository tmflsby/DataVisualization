import service from '@/utils/request'

export const screenData = () => service({
  url: '/screen/data',
  method: 'get'
})
