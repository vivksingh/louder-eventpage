import React from 'react'

export function ThemeProvider({ children, ...props }) {
  return <div {...props}>{children}</div>
}