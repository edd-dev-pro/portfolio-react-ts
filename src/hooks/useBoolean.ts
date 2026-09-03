import { useCallback, useState } from 'react'

interface UseBooleanReturn {
  value: boolean
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
  setValue: (value: boolean) => void
}

const useBoolean = (initialValue = true): UseBooleanReturn => {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toggle = useCallback(() => {
    setValue((currentValue) => !currentValue)
  }, [])

  return {
    value,
    setTrue,
    setFalse,
    toggle,
    setValue,
  }
}

export default useBoolean
