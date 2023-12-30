import devicesImage from "../assets/image-devices.png"
const Access = () => {
  return (
    <section className='access py-16 px-8 container mx-auto'>
        <header className='access__header text-center flow-content--m mb-16'>
            <h2 className='access__title title font-bold text-3xl'>Access Clipboard anywhere</h2>
            <p className='access__description description max-w-[550px] mx-auto'>Whatever you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        </header>
        <div className="img-wrapper"><img className="max-w-[900px] mx-auto w-full" src={devicesImage} alt="" /></div>
    </section>
  )
}

export default Access
