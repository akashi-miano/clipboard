import blackListIcon from "../assets/icon-blacklist.svg";
import textIcon from "../assets/icon-text.svg";
import previewIcon from "../assets/icon-preview.svg";
import googleIcon from "../assets/logo-google.png"
import ibmIcon from "../assets/logo-ibm.png"
import microsoftIcon from "../assets/logo-microsoft.png"
import hpIcon from "../assets/logo-hp.png"
import vectorGraphicsIcon from "../assets/logo-vector-graphics.png"

const Supercharge = () => {
  return (
    <section className='super-charge py-16 px-8 container mx-auto'>
        <heading className="super-char__heading flow-content--m text-center">
            <h2 className='super-charge__title title font-bold text-3xl'>Supercharge your workflow</h2>
            <p className='super-charge__description description'>We've got the tools to boost your productivity.</p>
        </heading>
        <div className="cards-wrapper mt-16 grid md:grid-cols-3 flow-content--m mb-32">
            <div className="card flow-content--m text-center">
                <img className="mx-auto" src={blackListIcon} sizes={50} alt="" />
                <h3 className='card__title title font-bold text-2xl'>Create blacklists</h3>
                <p className='card__description description max-w-[450px] mx-auto'>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
            <div className="card flow-content--m text-center">
                <img className="mx-auto" src={textIcon} sizes={50} alt="" />
                <h3 className='card__title title font-bold text-2xl'>Plain text snippets</h3>
                <p className='card__description description max-w-[450px] mx-auto'>Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            <div className="card flow-content--m text-center">
                <img className="mx-auto" src={previewIcon} sizes={50} alt="" />
                <h3 className='card__title title font-bold text-2xl'>Sneak preview</h3>
                <p className='card__description description max-w-[450px] mx-auto'>Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
        </div>
        <div className="icons-wrapper">
            <ul className="flex flex-col md:flex-row gap-8 md:gap-24 w-full justify-center items-center container mx-auto">
                <li><a href=""><img src={googleIcon} alt="" /></a></li>
                <li><a href=""><img src={ibmIcon} alt="" /></a></li>
                <li><a href=""><img src={microsoftIcon} alt="" /></a></li>
                <li><a href=""><img src={hpIcon} alt="" /></a></li>
                <li><a href=""><img src={vectorGraphicsIcon} alt="" /></a></li>
            </ul>
        </div>
    </section>
  )
}

export default Supercharge
