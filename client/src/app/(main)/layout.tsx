import AuthProvider from '@/provider/AuthProvider'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
