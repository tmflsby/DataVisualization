import service from '@/utils/request'

export const getScreenMobileData = () => service({
  url: '/screen/mobile',
  method: 'get'
})
