export const transformObjectToArrayWithName = (object: Object): Array<any> => {
  const dataKeys = Object.keys(object)
  return dataKeys.map(value => ({
      [value]: object[value]
    })
  )
}


export const transformObjectToArray = (object: Object): Array<any> => {
  return Object.keys(object)
        .map(value => value)
}
