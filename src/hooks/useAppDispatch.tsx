import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux'

// instead of plain `useDispatch`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
