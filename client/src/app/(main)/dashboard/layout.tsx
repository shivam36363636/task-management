import Navbar from '@/components/navbar'
import LeftSidebar from '@/components/sidebar/leftSidebar'
import RightSidebar from '@/components/sidebar/rightSidebar'
import CreateTask from '@/components/task/create-task'
import { TaskDetails } from '@/components/task/task-details'
import AuthWrapper from '@/provider/AuthWrapper'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {

  return (
    <AuthWrapper>
      <main className='flex h-[100dvh] overflow-hidden w-[100dvw]'>
        <LeftSidebar />
        <div className='flex-1 flex flex-col'>
          <Navbar />
          <div id='main-content' className='flex-1 overflow-y-auto'>
            {children}
          </div>
          <TaskDetails />
        </div>
        <RightSidebar/>
      </main>
      <CreateTask />
    </AuthWrapper>
  )
}
