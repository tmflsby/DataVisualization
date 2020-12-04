export const format = (v) => {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

export const wrapperObject = (o, k) => {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

export const wrapperArray = (o, k) => {
  return o && o[k] ? o[k] : []
}

export const wrapperMoney = (o, k) => {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}

export const wrapperOriginalNumber = (o, k) => {
  return o && o[k] ? o[k] : 0
}

export const wrapperNumber = (o, k) => {
  return o && o[k] ? format(o[k]) : 0
}

export const wrapperPercentage = (o, k) => {
  return o && o[k] ? `${o[k]}%` : '0%'
}
