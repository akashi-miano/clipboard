import React from 'react'

const ForIosAndMac = () => {
  return (
    <section className='py-16 px-8 container mx-auto'>
        <header className='flow-content--m text-center'>
            <h2 className="title font-bold text-3xl">Clipboard for IOS and Mac Os</h2>
            <p className="description max-w-[750px] mx-auto">Available for free on App Store Download for Mac or Ios, sync with Icloud and you're ready to start adding to  your clipboard.</p>
            <div className="btn-rapper flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="" className="btn btn--primary">Download for Ios</a>
            <a href="" className="btn btn--secondary">Download for Mac</a>
            </div>
        </header>
    </section>
  )
}

export default ForIosAndMac
