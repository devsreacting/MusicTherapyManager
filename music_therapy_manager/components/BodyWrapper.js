import React from 'react'

export default function BodyWrapper(props) {
    const { children } = props
    return (
        <div className='flex flex-col min-h-screen relative bg-slate-900 text-white'>
            <main className='flex-1 flex flex-col'>
                {children}
            </main>
        </div>
    )
}