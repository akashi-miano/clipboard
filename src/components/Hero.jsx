import copyRightImage from "../assets/logo.svg"
import heroDesktopImage from "../assets/bg-header-desktop.png"
import heroMobileImage from "../assets/bg-header-mobile.png"

const Hero = () => {
    const isMobile = window.innerWidth <= 768;

    const desktopStyle = {
        backgroundImage: `url(${heroDesktopImage})`,
    }

    const mobileStyle = {
        backgroundImage: `url(${heroMobileImage})`,
    }
  return (
    <section className='hero px-8 bg-center bg-cover' style={isMobile ? mobileStyle: desktopStyle}>
        <header className='hero__header flex items-center justify-center flex-col min-h-[75vh] flow-content--m container mx-auto text-center'>
            <img className="block mb-4" src={copyRightImage} alt="" />
            <h1 className='title hero__title text-4xl md:text-5xl font-bold'>A history of everything you copy</h1>
            <p className='hero__description description max-w-[800px] mx-auto'>Clipboard allows you to track and organize everything you copy. Instantly access you clipboard on all your devices</p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <a href="" className="btn btn--primary">Download for IOS</a>
                <a href="" className="btn btn--secondary">Download for Mac</a>
            </div>
        </header>
    </section>
  )
}

export default Hero
