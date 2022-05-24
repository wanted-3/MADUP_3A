const setString = (ccc: number) => {
  if (ccc < 0) {
    return String(ccc * -1)
  }
  return String(ccc)
}
export default setString
