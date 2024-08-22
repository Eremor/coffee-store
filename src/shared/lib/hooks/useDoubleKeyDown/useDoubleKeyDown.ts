import { useCallback, useEffect } from "react"

export const useDoubleKeyDown = (
  callback: () => void,
  key: string
) => {

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === key && event.ctrlKey) {
      event.preventDefault()
      callback()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  })
}