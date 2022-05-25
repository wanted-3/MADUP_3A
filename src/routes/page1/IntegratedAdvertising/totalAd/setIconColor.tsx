import { DecrementIcon, IncrementIcon } from '../../../../assets/svgs'

const setIconColor = (a: number) => (a < 0 ? <IncrementIcon /> : <DecrementIcon />)
export default setIconColor
