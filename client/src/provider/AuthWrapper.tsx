"use client";
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation';

export default function AuthWrapper({children}:{children:React.ReactNode}) {
    
    useEffect(()=>{
        if(!localStorage.getItem("loginToken")){
            redirect('/auth/login')
        }
    },[])
  return children;
}
