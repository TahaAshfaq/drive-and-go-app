"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Screen =
  | "dashboard"
  | "driver-detail"
  | "customer-detail"
  | "ride-detail"
  | "vehicle-detail"
  | "car-registration"
  | "add-driver"
  | "ride-allocation"

interface NavigationContextType {
  currentScreen: Screen
  screenData: any
  navigateTo: (screen: Screen, data?: any) => void
  goBack: () => void
  history: Array<{ screen: Screen; data?: any }>
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<Array<{ screen: Screen; data?: any }>>([{ screen: "dashboard" }])

  const currentEntry = history[history.length - 1]
  const currentScreen = currentEntry.screen
  const screenData = currentEntry.data

  const navigateTo = (screen: Screen, data?: any) => {
    setHistory((prev) => [...prev, { screen, data }])
  }

  const goBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1))
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        currentScreen,
        screenData,
        navigateTo,
        goBack,
        history,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider")
  }
  return context
}
