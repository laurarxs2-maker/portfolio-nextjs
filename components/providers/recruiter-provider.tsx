"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type RecruiterContextValue = {
  recruiterMode: boolean
  toggleRecruiterMode: () => void
  setRecruiterMode: (value: boolean) => void
}

const RecruiterContext = createContext<RecruiterContextValue | null>(null)
const STORAGE_KEY = "portfolio-recruiter-mode"

export function RecruiterProvider({ children }: { children: ReactNode }) {
  const [recruiterMode, setRecruiterModeState] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "true") setRecruiterModeState(true)
  }, [])

  const setRecruiterMode = useCallback((value: boolean) => {
    setRecruiterModeState(value)
    window.localStorage.setItem(STORAGE_KEY, String(value))
    document.documentElement.dataset.recruiter = value ? "true" : "false"
  }, [])

  const toggleRecruiterMode = useCallback(() => {
    setRecruiterMode(!recruiterMode)
  }, [recruiterMode, setRecruiterMode])

  const value = useMemo(
    () => ({ recruiterMode, toggleRecruiterMode, setRecruiterMode }),
    [recruiterMode, toggleRecruiterMode, setRecruiterMode],
  )

  return (
    <RecruiterContext.Provider value={value}>
      {children}
    </RecruiterContext.Provider>
  )
}

export function useRecruiterMode() {
  const context = useContext(RecruiterContext)
  if (!context) {
    throw new Error("useRecruiterMode must be used within RecruiterProvider")
  }
  return context
}
