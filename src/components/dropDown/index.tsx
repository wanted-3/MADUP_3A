import { useState } from 'react'

const dropdownItems = ['all', 'app', 'web']
const DropDown = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('All')

  // click 이벤트
  const dropDownHandler = (): any => {
    console.log('click')
    setIsOpen((_isopen: boolean) => !isOpen)
    console.log(isOpen)
  }

  return (
    <div className='container'>
      <button onClick={dropDownHandler} type='submit'>
        {value}
      </button>
      {isOpen ? dropdownItems.map((data) => <div key={data}>{data}</div>) : null}
      {/* <Dropdown show={isOpen} value={value} onClick={dropDownHandler} handleChange={} /> */}
    </div>
  )
}
export default DropDown
