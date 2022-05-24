const setSlice = (_value: string) => {
  if (_value.length > 7) {
    return _value.slice(0, 4).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  }
  if (_value.length > 6) {
    return _value.slice(0, 3)
  }
  if (_value.length === 6) {
    return _value.slice(0, 2)
  }
  if (_value.length === 5) {
    return _value.slice(0, 1)
  }
  if (_value.length < 5) {
    return _value
  }
  return null
}
export default setSlice
